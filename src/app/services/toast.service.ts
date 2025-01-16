import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
/**
 * Created a common service for handling Angular Snackbar to implement toasts
 */
export class ToastService {

  private defaultConfig: MatSnackBarConfig = {
    duration: 3000, // Default duration in milliseconds
    horizontalPosition: 'right', // Positions: 'start' | 'center' | 'end' | 'left' | 'right'
    verticalPosition: 'top',    // Positions: 'top' | 'bottom'
  };

  constructor(private snackBar: MatSnackBar) {}

  // Display a success message
  public showSuccess(message: string, action: string = 'OK', config: MatSnackBarConfig = {}): void {
    this.snackBar.open(message, action, {
      ...this.defaultConfig,
      ...config,
      panelClass: ['mat-toolbar', 'mat-primary'], // Use Angular Material styles
    });
  }

  // Display an informational message
  public showInfo(message: string, action: string = 'OK', config: MatSnackBarConfig = {}): void {
    this.snackBar.open(message, action, {
      ...this.defaultConfig,
      ...config,
      panelClass: ['mat-toolbar', 'mat-accent'], // Accent style for info
    });
  }
}
