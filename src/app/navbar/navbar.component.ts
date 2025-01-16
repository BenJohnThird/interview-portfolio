import { Component, Input, OnInit } from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import { AuthenticationService } from "../services/authentication.service";
import { LocalStorageService } from "../services/local-storage.service";
import { LocalStorageKeyEnum } from "../enums/local-storage-key-enums";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  @Input()
  public matDrawer?: MatDrawer;

  public isLightMode!: boolean;

  constructor(
    private authService: AuthenticationService,
    private localStorageService: LocalStorageService,
  ) {}

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  public ngOnInit(): void {
    this.isLightMode = this.localStorageService.isLocalStorageKeyEnabled(LocalStorageKeyEnum.IsLightMode);

    this.processTheme();
  }

  public toggleTheme(): void {
    this.isLightMode = !this.isLightMode;
    this.localStorageService.setLocalStorageKey(LocalStorageKeyEnum.IsLightMode, this.isLightMode);

    this.processTheme();
  }

  private processTheme(): void {
    const rootElement = document.documentElement; // or document.body
    if (this.isLightMode) {
      rootElement.classList.remove('dark');
    } else {
      rootElement.classList.add('dark');
    }
  }
}
