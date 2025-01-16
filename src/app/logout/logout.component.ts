import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import { ToastService } from "../services/toast.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private toastService: ToastService,
    private authService: AuthenticationService,
  ) {}

  public ngOnInit(): void {
    this.authService.logout();
    this.toastService.showInfo('You have successfully logged out');
  }

  public goToLogin(): void {
    this.router.navigate(['/login']);
  }

}
