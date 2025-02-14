import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperiencesDashboardComponent } from './work-experiences-dashboard.component';
import { PortfolioService } from "../../../services/portfolio.service";
import { PortfolioServiceMock } from "../../../mocks/portfolio-service.mock";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { CommonPanelComponent } from "../../../shared/common-panel/common-panel.component";
import { PipesModule } from "../../../shared/pipes/pipes.module";
import { WorkExperiencesFormComponent } from "./work-experiences-form/work-experiences-form.component";
import { MatIcon } from "@angular/material/icon";

describe('WorkExperiencesDashboardComponent', () => {
  let component: WorkExperiencesDashboardComponent;
  let fixture: ComponentFixture<WorkExperiencesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WorkExperiencesDashboardComponent,
        WorkExperiencesFormComponent,
      ],
      imports: [
        CommonPanelComponent,
        PipesModule,
        MatIcon,
      ],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: PortfolioService, useClass: PortfolioServiceMock },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperiencesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
