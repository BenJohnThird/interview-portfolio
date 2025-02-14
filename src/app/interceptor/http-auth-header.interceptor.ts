import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { BehaviorSubject, catchError, filter, Observable, switchMap, switchScan, take, throwError } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";

@Injectable()
export class HttpAuthHeaderInterceptor implements HttpInterceptor {

  private isRefreshing = false;

  private refreshTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private authService: AuthenticationService) {}

  public appendAuthHeader(request: HttpRequest<any>): HttpRequest<any> {
    const authHeader = this.authService.getAuthorizationHeader();
    if (authHeader) {
      return request.clone({
        headers: request.headers.set('Authorization', authHeader),
      }) as HttpRequest<any>;
    }

    return request.clone();
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    request = this.appendAuthHeader(request);
    return next.handle(request).pipe(
      catchError((error) => this.refreshSession(error, request, next))
    );
  }

  private refreshSession(error: any, request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (error.status === 401) {
      return this.handle401Error(request, next);
    }
    return throwError(() => error);
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): any {
    if (this.authService.isRefreshTokenExpired()) {
      console.warn("Refresh token expired. Logging out...");
      this.authService.logoutAndRedirect();
      return throwError(() => new Error("Refresh token expired"));
    }

    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      return this.authService.refreshSession().pipe(
        switchMap((result) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(result ? this.authService.token : null);
          request = this.appendAuthHeader(request);
          return next.handle(request);
        }),
        catchError((error) => {
          this.isRefreshing = false;
          this.authService.logoutAndRedirect();
          return throwError(() => error);
        })
      )
    } else {
      // If a refresh is already in progress, wait until it completes
      return this.refreshTokenSubject.pipe(
        // Only proceed once a new token is available
        filter((token) => token != null),
        take(1),
        switchMap((jwt) => {
          // Append the new token to the request headers
          request = this.appendAuthHeader(request);
          // Retry the original request with the new token
          return next.handle(request);
        })
      );
    }
  }
}
