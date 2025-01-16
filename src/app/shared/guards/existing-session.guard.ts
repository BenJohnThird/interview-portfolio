import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";

@Injectable({
  providedIn: 'root'
})
/**
 * This guard will check if the current user is already logged in, if YES and the user accessed the login page again
 * there is no use, so this guard will throw the user to the dashboard instead
 */
export class ExistingSessionGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }

    return true;
  }
}
