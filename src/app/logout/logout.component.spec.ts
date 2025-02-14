import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import { CommonPanelComponent } from "../shared/common-panel/common-panel.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Router } from "@angular/router";
import Spy = jasmine.Spy;
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  let routerSpy: Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoutComponent],
      imports: [
        CommonPanelComponent,
        BrowserAnimationsModule,
        HttpClientTestingModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;

    const router = TestBed.get(Router);
    routerSpy = spyOn(router, 'navigate')
      .and
      .callThrough();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call router.navigate when goToLogin() is called', () => {
    component.goToLogin();
    fixture.detectChanges();

    expect(routerSpy)
      .toHaveBeenCalled();
  });
});
