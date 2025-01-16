import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { MatIcon } from "@angular/material/icon";
import Spy = jasmine.Spy;
import { AuthenticationService } from "../services/authentication.service";

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  let authLogoutSpy: Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationComponent],
      imports: [
        MatIcon,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;

    const authService = TestBed.get(AuthenticationService);
    authLogoutSpy = spyOn(authService, 'logout')
      .and
      .callThrough();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call authService.logout() when logout function is called', () => {
    component.logout();
    fixture.detectChanges();

    expect(authLogoutSpy)
      .toHaveBeenCalled();
  });
});
