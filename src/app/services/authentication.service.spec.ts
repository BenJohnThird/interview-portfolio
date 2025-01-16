import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set isLogged to TRUE if username and password is both admin', () => {
    service.login('admin', 'admin');
    expect(service.isLoggedIn)
      .toBe(true);
  });

  it('should set isLogged to FALSE if username or password is not admin', () => {
    service.login('admin', 'not-admin');
    expect(service.isLoggedIn)
      .toBe(false);
  });
});
