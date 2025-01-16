import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { LocalStorageService } from "../../services/local-storage.service";

@Injectable({
  providedIn: 'root'
})
/**
 * This guard checks if the certain localStorage (key provided) is enabled or TRUE.
 * If YES, route will continue
 * If NO, user will be routed to page-error
 */
export class IsLocalStorageCheckedGuard implements CanActivate {

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const storageKey = route.data['storageKey']

    if (!this.localStorageService.isLocalStorageKeyEnabled(storageKey)) {
      // Redirect to error page if not enabled
      this.router.navigate(['/page-error']);
      return false;
    }

    return true;
  }
}
