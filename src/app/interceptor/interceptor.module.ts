import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpAuthHeaderInterceptor } from "./http-auth-header.interceptor";
import { GlobalLoaderInterceptor } from "./global-loader.interceptor";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthHeaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalLoaderInterceptor,
      multi: true,
    }
  ]
})
export class InterceptorModule { }
