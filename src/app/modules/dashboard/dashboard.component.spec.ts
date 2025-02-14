import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from "@angular/router/testing";
import { CommonPanelComponent } from "../../shared/common-panel/common-panel.component";
import { MatIcon } from "@angular/material/icon";
import { WorkExperiencesDashboardComponent } from "./work-experiences-dashboard/work-experiences-dashboard.component";
import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ReviewDashboardComponent } from "./review-dashboard/review-dashboard.component";
import { PipesModule } from "../../shared/pipes/pipes.module";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        ReviewDashboardComponent,
        WorkExperiencesDashboardComponent,
      ],
      imports: [
        RouterTestingModule,
        CommonPanelComponent,
        MatIcon,
        HttpClientTestingModule,
        PipesModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
