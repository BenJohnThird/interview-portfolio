import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CommonPanelComponent } from "../../shared/common-panel/common-panel.component";
import { MatIcon } from "@angular/material/icon";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonPanelComponent,
    MatIcon
  ]
})
export class DashboardModule { }
