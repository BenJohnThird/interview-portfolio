import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CommonPanelComponent } from "../../shared/common-panel/common-panel.component";
import { MatIcon } from "@angular/material/icon";
import { WorkExperiencesDashboardComponent } from './work-experiences-dashboard/work-experiences-dashboard.component';
import { WorkExperiencesFormComponent } from './work-experiences-dashboard/work-experiences-form/work-experiences-form.component';
import { PipesModule } from "../../shared/pipes/pipes.module";
import { MatButton } from "@angular/material/button";
import { ReviewDashboardComponent } from './review-dashboard/review-dashboard.component';
import {CdkTextareaAutosize} from "@angular/cdk/text-field";
import {FormsModule} from "@angular/forms";
import { MatError, MatFormField, MatFormFieldModule, MatHint, MatLabel } from "@angular/material/form-field";
import { MatInput, MatInputModule } from "@angular/material/input";
import { MatDatepicker, MatDatepickerInput, MatDatepickerModule, MatDatepickerToggle } from "@angular/material/datepicker";
import { MAT_DATE_FORMATS, MatNativeDateModule, provideNativeDateAdapter } from "@angular/material/core";
import { MY_DATE_FORMATS } from "../../config/date-format.config";
import { MatSlideToggle } from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
    DashboardComponent,
    WorkExperiencesDashboardComponent,
    WorkExperiencesFormComponent,
    ReviewDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonPanelComponent,
    MatIcon,
    PipesModule,
    MatButton,
    CdkTextareaAutosize,
    FormsModule,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    MatHint,
    MatNativeDateModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSlideToggle
  ],
})
export class DashboardModule { }
