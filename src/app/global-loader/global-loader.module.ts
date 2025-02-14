import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './global-loader.component';
import { NgxSpinnerComponent } from "ngx-spinner";

@NgModule({
  declarations: [GlobalLoaderComponent],
  exports: [GlobalLoaderComponent],
  imports: [
    CommonModule,
    NgxSpinnerComponent,
  ]
})
export class GlobalLoaderModule { }
