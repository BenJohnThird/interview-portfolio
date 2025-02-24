import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpErrorResponse, HttpHandler, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { LocalStorageService } from "./local-storage.service";
import { LocalStorageKeyEnum } from "../enums/local-storage-key-enums";
import { of } from "rxjs";
import { UserSession } from "../models/user-session";
import { Router } from "@angular/router";
import Spy = jasmine.Spy;

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let localStorageService: LocalStorageService;
  let http: HttpClient;
  let routerSpy: Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [
        HttpClient,
        HttpHandler,
        AuthenticationService,
        LocalStorageService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
    ]
});
    service = TestBed.inject(AuthenticationService);
    http = TestBed.inject(HttpClient);
    localStorageService = TestBed.inject(LocalStorageService);

    const router = TestBed.get(Router);
    routerSpy = spyOn(router, 'navigate')
      .and
      .callThrough();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login successfully and set session', () => {
    const userEmail = 'test@example.com';
    const password = 'testPassword';

    const userSession: UserSession = {
      expiresIn: 0,
      refreshToken: "",
      tokenType: "",
      accessToken: 'accessToken'
    }

    spyOn(http, 'post')
      .and
      .returnValue(of(userSession))

    service.login(userEmail, password).subscribe(response => {
      expect(response.accessToken).toEqual('accessToken');
      expect(service.isLoggedIn).toBeTrue();
      expect(localStorageService.isLocalStorageKeyEnabled(LocalStorageKeyEnum.IsSessionActive)).toBeTrue();
    });

    expect(service.getAuthorizationHeader())
      .toBeTruthy();
  });

  it('should handle login error', () => {
    const userEmail = 'test@example.com';
    const password = 'testPassword';

    spyOn(http, 'post')
      .and
      .returnValue(of(new Error("HHEHE")))

    service.login(userEmail, password).subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err)
          .toBeTruthy();
      }
    });

    expect(service.isLoggedIn)
      .toBeFalsy();

    expect(service.getAuthorizationHeader())
      .toBeFalsy();
  });

  it('should set is loggedIn to false when logout is called', () => {
    service.logout();
    expect(service.isLoggedIn)
      .toBeFalsy();
  });

  it('should call router when logout and redirect is called', () => {
    service.logoutAndRedirect();
    expect(service.isLoggedIn)
      .toBeFalsy();

    expect(routerSpy)
      .toHaveBeenCalled();
  });

  it('should throw an error when refresh token is empty', async () => {
    try {
      await service.refreshSession().toPromise();
    } catch (e) {
      expect(e)
        .toBeTruthy();
    }
  });

  it('should still make logged in to false when there is no session value returned', async () => {
    try {
      spyOn(http, 'post')
        .and
        .returnValue(of(null));

      spyOn(localStorage, 'getItem')
        .and
        .returnValue('token');

      await service.refreshSession().toPromise();

      expect(service.isLoggedIn)
        .toBeFalsy();
    } catch (e) {
      console.error(e);
    }
  });

  it('should still make logged in to false when there is no session value returned', async () => {
    try {
      spyOn(http, 'post')
        .and
        .returnValue(of(new Error("ERROR")));

      spyOn(localStorage, 'getItem')
        .and
        .returnValue('token');

      await service.refreshSession().toPromise();
    } catch (e) {
      expect(e)
        .toBeTruthy();
      console.error(e);
    }
  });

  it('should return true if there is no expiry value in localStorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null); // Simulate no expiry in localStorage

    const result = service.isRefreshTokenExpired();

    expect(result).toBe(true); // Since no expiry value, it should be expired
  });

  it('should return true if the expiry value is less than the current time', () => {
    const pastExpiry = (Date.now() - 1000).toString();
    spyOn(localStorage, 'getItem').and.returnValue(pastExpiry); // Expiry is in the past

    const result = service.isRefreshTokenExpired();

    expect(result).toBe(true); // Expiry is in the past, should return true (expired)
  });

  it('should return false if the expiry value is greater than the current time', () => {
    const futureExpiry = (Date.now() + 10000).toString(); // Expiry is in the future
    spyOn(localStorage, 'getItem').and.returnValue(futureExpiry);

    const result = service.isRefreshTokenExpired();

    expect(result).toBe(false); // Expiry is in the future, should return false (not expired)
  });

});
