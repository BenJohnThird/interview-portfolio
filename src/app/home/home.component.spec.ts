import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { WorkExperiencesComponent } from "../work-experiences/work-experiences.component";
import { CommonPanelComponent } from "../shared/common-panel/common-panel.component";
import { PipesModule } from "../shared/pipes/pipes.module";
import { PortfolioService } from "../services/portfolio.service";
import { PortfolioServiceMock } from "../mocks/portfolio-service.mock";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        WorkExperiencesComponent,
      ],
      imports: [
        CommonPanelComponent,
        PipesModule,
      ],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: PortfolioService, useClass: PortfolioServiceMock },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
