import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";

@Injectable({
  providedIn: 'root'
})
/**
 * This guard will check if the user is logged in or not, if NOT and the user accessed certain routes
 * that needs authentication first, this guard will throw the route to login page
 */
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login']);
    }

    return true;
  }
}
