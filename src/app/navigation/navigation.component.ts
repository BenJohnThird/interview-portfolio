import { Component } from '@angular/core';
import { AuthenticationService } from "../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) { }

  public logout(): void {
    this.authService.logout();

    this.router.navigate(['/']);
  }
}
