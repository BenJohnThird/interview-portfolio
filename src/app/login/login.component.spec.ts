import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { CommonPanelComponent } from "../shared/common-panel/common-panel.component";
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIcon } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { MatInput } from "@angular/material/input";
import { AuthenticationService } from "../services/authentication.service";
import Spy = jasmine.Spy;
import { TestingUtils } from "../testing/testing-utils";
import { Router } from "@angular/router";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let authLoginSpy: Spy;
  let routerSpy: Spy;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        CommonPanelComponent,
        FormsModule,
        MatFormField,
        MatInput,
        MatLabel,
        MatError,
        MatIcon,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    const authenticationService = TestBed.inject(AuthenticationService);
    authLoginSpy = spyOn(authenticationService, 'login')
      .and
      .callThrough();

    const router = TestBed.get(Router);
    routerSpy = spyOn(router, 'navigate')
      .and
      .callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not call login when there is either no username or password', () => {
    const loginBtn = TestingUtils.queryByCss(fixture, '.login-btn');
    loginBtn.nativeElement.click();
    fixture.detectChanges();

    expect(authLoginSpy)
      .not
      .toHaveBeenCalled();
  });

  it('should NOT call router spy when the username and password is not correct', async () => {
    dispatchUserNameAndPassword(fixture, 'not-admin', 'admin');
    const loginBtn = TestingUtils.queryByCss(fixture, '.login-btn');
    loginBtn.nativeElement.click();
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(routerSpy)
      .not
      .toHaveBeenCalled();
  });

  it('should CALL router spy when the username and password is correct', async () => {
    dispatchUserNameAndPassword(fixture, 'admin', 'admin');
    const loginBtn = TestingUtils.queryByCss(fixture, '.login-btn');
    loginBtn.nativeElement.click();
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(routerSpy)
      .toHaveBeenCalled();
  });
});

function dispatchUserNameAndPassword(fixture: ComponentFixture<LoginComponent>, username: string, password: string): void {
  const userNameEl = TestingUtils.queryByCss(fixture, '.ut-username');
  userNameEl.nativeElement.value = username;
  userNameEl.nativeElement.dispatchEvent(new Event('input'));

  const passwordEl = TestingUtils.queryByCss(fixture, '.ut-password');
  passwordEl.nativeElement.value = password;
  passwordEl.nativeElement.dispatchEvent(new Event('input'));
}
