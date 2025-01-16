import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatDrawer, MatDrawerContainer } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigationComponent } from "./navigation/navigation.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { MatIcon } from "@angular/material/icon";
import { MatMenu, MatMenuTrigger } from "@angular/material/menu";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { of } from "rxjs";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let breakpointObserverMock: jasmine.SpyObj<BreakpointObserver>;

  beforeEach(async () => {
    breakpointObserverMock = jasmine.createSpyObj('BreakpointObserver', ['observe']);
    await TestBed.configureTestingModule({
      imports: [
        MatDrawerContainer,
        MatDrawer,
        BrowserAnimationsModule,
        RouterTestingModule,
        MatIcon,
        MatMenu,
        MatMenuTrigger,
      ],
      declarations: [
        AppComponent,
        NavigationComponent,
        NavbarComponent,
      ],
      providers: [
        { provide: BreakpointObserver, useValue: breakpointObserverMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should set the matDrawer mode to over when it detects small screen width', () => {
    const breakpointState: BreakpointState = {breakpoints: {}, matches: true };
    // Simulate a small screen size
    breakpointObserverMock
      .observe
      .and
      .returnValue(of(breakpointState));

    fixture.detectChanges();

    expect(component.matDrawer.mode)
      .toBe('over');
  });

  it('should set the matDrawer mode to side when it detects non-small screen widths', () => {
    const breakpointState: BreakpointState = {breakpoints: {}, matches: false };
    breakpointObserverMock
      .observe
      .and
      .returnValue(of(breakpointState));

    fixture.detectChanges();

    expect(component.matDrawer.mode)
      .toBe('side');
  });
});
