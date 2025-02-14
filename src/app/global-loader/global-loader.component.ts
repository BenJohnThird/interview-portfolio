import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { GlobalLoaderService } from "../services/global-loader.service";

@Component({
  selector: 'app-global-loader',
  templateUrl: './global-loader.component.html',
  styleUrl: './global-loader.component.scss'
})
export class GlobalLoaderComponent implements OnInit {

  constructor(
    private ngxSpinner: NgxSpinnerService,
    private globalLoader: GlobalLoaderService) {}

  public ngOnInit(): void {
    this.globalLoader.loaderStatus.subscribe((loadCount) => {
      this.toggleLoader(loadCount);
    });

    // this.setupRouteListener();
  }

  private async toggleLoader(current: number): Promise<void> {
    if (current > 0) {
      await this.ngxSpinner.show();
    } else {
      await this.ngxSpinner.hide();
    }
  }
}
