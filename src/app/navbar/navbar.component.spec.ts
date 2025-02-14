import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { MatMenu } from "@angular/material/menu";
import { MatIcon } from "@angular/material/icon";
import { TestingUtils } from "../testing/testing-utils";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        MatMenu,
        MatIcon,
        HttpClientTestingModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the light mode theme on when toggle theme is clicked', () => {
    component.isLightMode = false;
    fixture.detectChanges();

    const themeBtn = TestingUtils.queryByCss(fixture, '.ut-toggle-btn');
    themeBtn.nativeElement.click();
    fixture.detectChanges();

    expect(component.isLightMode)
      .toBeTruthy();
  });

  it('should set the light mode theme false when toggle theme is clicked', () => {
    component.isLightMode = true;
    fixture.detectChanges();

    const themeBtn = TestingUtils.queryByCss(fixture, '.ut-toggle-btn');
    themeBtn.nativeElement.click();
    fixture.detectChanges();

    expect(component.isLightMode)
      .toBeFalsy();
  });
});
