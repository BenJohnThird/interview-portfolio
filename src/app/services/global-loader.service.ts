import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderService {

  public loaderStatus = new BehaviorSubject<number>(0);

  constructor() { }

  public triggerAuto(): void {
    const current = this.loaderStatus.getValue();
    const next = current + 1;
    this.loaderStatus.next(next);
  }

  public completeAuto(): void {
    const current = this.loaderStatus.getValue();
    let next = current - 1;

    if (next < 0) {
      next = 0;
    }

    this.loaderStatus.next(next);
  }
}
