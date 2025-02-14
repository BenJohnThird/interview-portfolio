import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from "./services/authentication.service";
import { LocalStorageKeyEnum } from "./enums/local-storage-key-enums";
import { LocalStorageService } from "./services/local-storage.service";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { MatDrawer } from "@angular/material/sidenav";
import { catchError, throwError } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('drawer')
  public matDrawer!: MatDrawer;

  public title = 'interview';

  constructor(
    private observer: BreakpointObserver,
    private authService: AuthenticationService,
    private localStorageService: LocalStorageService,
    private cdr: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    // Let us check first if the current user is logged by determining the value from the localStorage
    this.authService.isLoggedIn = this.localStorageService.isLocalStorageKeyEnabled(LocalStorageKeyEnum.IsSessionActive);

    this.localStorageService.setLocalStorageKey(LocalStorageKeyEnum.IsReviewPageEnabled, true);
  }

  public ngAfterViewInit(): void {
    this.observer?.observe(['(max-width: 800px)'])
      .subscribe((res: BreakpointState) => {
        this.matDrawer.mode = res.matches ? 'over': 'side';
        this.cdr.detectChanges();
      });
  }
}
