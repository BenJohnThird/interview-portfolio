import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDashboardComponent } from './review-dashboard.component';
import { ReviewService } from "../../../services/review.service";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { CommonPanelComponent } from "../../../shared/common-panel/common-panel.component";
import { PipesModule } from "../../../shared/pipes/pipes.module";
import { MatIcon } from "@angular/material/icon";
import { ReviewServiceMock } from "../../../mocks/review-service.mock";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('ReviewDashboardComponent', () => {
  let component: ReviewDashboardComponent;
  let fixture: ComponentFixture<ReviewDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ReviewDashboardComponent,
      ],
      imports: [
        CommonPanelComponent,
        PipesModule,
        MatIcon,
      ],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: ReviewService, useClass: ReviewServiceMock },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have reviews', async () => {
    fixture.detectChanges();
    expect(component.reviews)
      .toBeTruthy();
  });
});
