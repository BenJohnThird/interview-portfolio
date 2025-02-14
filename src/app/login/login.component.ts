import { Component, ViewChild } from '@angular/core';
import { UserAuth } from "../models/user-auth";
import { NgForm } from "@angular/forms";
import { touchForm } from "../utils/touch-form";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import { ToastService } from "../services/toast.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  @ViewChild(NgForm)
  public form!: NgForm;

  public userAuth: UserAuth = { username: '', password: '' };

  public hiddenPassword = true;

  constructor(
    private router: Router,
    private toastService: ToastService,
    private authService: AuthenticationService,
  ) {}

  public async login(): Promise<void> {
    touchForm(this.form);
    if (this.form.invalid) {
      return;
    }

    // Check if the user is authenticated
    await this.authService
      .login(this.userAuth.username, this.userAuth.password)
      .toPromise();

    // If not, do nothing
    if (!this.authService.isLoggedIn) {
      return;
    }

    // If yes, navigate the user to dashboard
    this.router.navigate(['/dashboard']);
    this.toastService.showInfo('Welcome to your dashboard');
  }
}
