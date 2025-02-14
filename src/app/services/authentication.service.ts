import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from "rxjs";
import { LocalStorageService } from "./local-storage.service";
import { LocalStorageKeyEnum } from "../enums/local-storage-key-enums";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { UserSession } from "../models/user-session";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = environment.url + 'identity';

  private localIsLoggedIn!: boolean;

  public userSession!: UserSession;

  public token!: string;

  public get isLoggedIn(): boolean {
    return this.localIsLoggedIn;
  }

  public set isLoggedIn(isLoggedIn: boolean) {
    this.localIsLoggedIn = isLoggedIn;
  }

  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient,
    private router: Router,
  ) {
    if (this.localStorageService.isLocalStorageKeyEnabled(LocalStorageKeyEnum.IsSessionActive)) {
      this.token = localStorage.getItem(LocalStorageKeyEnum.SessionToken)!;
    }
  }

  /**
   * Process Login function
   * @param userEmail the userEmail
   * @param password the password
   */
  public login(userEmail: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/login`;
    const payload = { email: userEmail, password: password };

    return this.http.post<UserSession>(url, payload).pipe(
      map((response: UserSession) => {
        // Optionally handle successful login logic here if needed
        this.setupSessionDefaults(response);
        return response;
      }),
      catchError((error) => {
        // Handle login errors and set isLoggedIn to false
        this.isLoggedIn = false;
        return throwError(() => error); // Re-throw the error to propagate it further
      })
    );
  }

  public refreshSession(): Observable<any> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      return throwError(() => new Error('No refresh token available'));
    }

    const url = `${this.baseUrl}/refresh`;
    const payload: { refreshToken: string } = { refreshToken: refreshToken };

    return this.http.post<UserSession>(url, payload).pipe(
      tap((response: UserSession) => {
        console.log(response, 'SS');
        this.setupSessionDefaults(response);
      }),
      catchError(error => {
        console.error('Error inside refreshSession:', error);
        return throwError(() => error);
      })
    );
  }

  public logout(): void {
    this.isLoggedIn = false;
    this.localStorageService.removeLocalStorageKey(LocalStorageKeyEnum.IsSessionActive);
    this.localStorageService.removeLocalStorageKey(LocalStorageKeyEnum.SessionToken);
    this.localStorageService.removeLocalStorageKey(LocalStorageKeyEnum.RefreshToken);
    this.localStorageService.removeLocalStorageKey(LocalStorageKeyEnum.RefreshTokenExpiry);
  }

  public logoutAndRedirect(): void {
    this.logout();
    this.router.navigate(['logout']);
  }

  public getAuthorizationHeader(): string | null {
    return !this.token ? null : 'Bearer ' + this.token;
  }

  private getRefreshToken(): string | null {
    return localStorage.getItem(LocalStorageKeyEnum.RefreshToken);
  }

  private setupSessionDefaults(session: UserSession): void {
    if (!session) {
      return;
    }

    this.isLoggedIn = true;
    this.token = session.accessToken;
    this.userSession = session;
    this.localStorageService.setLocalStorageKey(LocalStorageKeyEnum.IsSessionActive, true);
    this.localStorageService.setLocalStorageKey(LocalStorageKeyEnum.SessionToken, this.token);
    this.localStorageService.setLocalStorageKey(LocalStorageKeyEnum.RefreshToken, session.refreshToken);

    const expiresIn = session.expiresIn;
    const expirationTime = Date.now() + expiresIn * 1000; // Convert to milliseconds
    this.localStorageService.setLocalStorageKey(LocalStorageKeyEnum.RefreshTokenExpiry, expirationTime.toString());
  }

  public isRefreshTokenExpired(): boolean {
    const expiry = localStorage.getItem(LocalStorageKeyEnum.RefreshTokenExpiry);
    return expiry ? parseInt(expiry, 10) < Date.now() : true;
  }
}
