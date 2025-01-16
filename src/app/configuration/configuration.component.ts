import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "../services/local-storage.service";
import { clone } from "../utils/clone";
import { LocalStorageKeyEnum } from "../enums/local-storage-key-enums";

interface ConfigurationControl {
  reviewPageEnabled: boolean;
  // add more controls here
}

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.scss'
})
export class ConfigurationComponent implements OnInit {

  public controls!: ConfigurationControl;

  public editControls!: ConfigurationControl;

  public editMode: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  public ngOnInit(): void {
    this.controls = {
      reviewPageEnabled: this.localStorageService.isLocalStorageKeyEnabled(LocalStorageKeyEnum.IsReviewPageEnabled),
    };
  }

  public edit(): void {
    this.editControls = clone(this.controls);
    this.editMode = true;
  }

  public save(): void {
    this.localStorageService.setLocalStorageKey(LocalStorageKeyEnum.IsReviewPageEnabled, this.editControls.reviewPageEnabled);

    this.controls = this.editControls;
    this.editMode = false;
  }

  public cancel(): void {
    this.editMode = false;
  }

}
