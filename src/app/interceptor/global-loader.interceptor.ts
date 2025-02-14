import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { finalize, Observable } from "rxjs";
import { GlobalLoaderService } from "../services/global-loader.service";

@Injectable()
export class GlobalLoaderInterceptor implements HttpInterceptor {

  constructor(private globalLoader: GlobalLoaderService) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    this.globalLoader.triggerAuto();

    return next.handle(request).pipe(
      finalize(() => {
        this.globalLoader.completeAuto();
      })
    );
  }
}
