import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { LocalStorageService } from "./local-storage.service";
import { LocalStorageKeyEnum } from "../enums/local-storage-key-enums";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private localIsLoggedIn!: boolean;

  public get isLoggedIn(): boolean {
    return this.localIsLoggedIn;
  }

  public set isLoggedIn(isLoggedIn: boolean) {
    this.localIsLoggedIn = isLoggedIn;
  }

  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  /**
   * Process Login function
   * @param userEmail the userEmail
   * @param password the password
   */
  public login(userEmail: string, password: string): Observable<boolean> {
    // This simulates authentication
    if (userEmail === 'admin' && password === 'admin') {
      // If authenticated, set the loggedIn to TRUE
      // Also, set the localStorageValue
      this.isLoggedIn = true;
      this.localStorageService.setLocalStorageKey(LocalStorageKeyEnum.IsSessionActive, true);

      // Return an observable, this commonly resembles firebase or aws authentication
      return of(true)
    }

    this.isLoggedIn = false;
    return of(false);
  }

  public logout(): void {
    this.isLoggedIn = false;
    this.localStorageService.removeLocalStorageKey(LocalStorageKeyEnum.IsSessionActive);
  }
}
