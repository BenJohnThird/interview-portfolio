import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteReviewComponent } from './write-review.component';
import { CommonPanelComponent } from "../shared/common-panel/common-panel.component";
import { ReviewService } from "../services/review.service";
import { ToastService } from "../services/toast.service";
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInput } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import Spy = jasmine.Spy;
import { TestingUtils } from "../testing/testing-utils";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { ReviewServiceMock } from "../mocks/review-service.mock";

describe('WriteReviewComponent', () => {
  let component: WriteReviewComponent;
  let fixture: ComponentFixture<WriteReviewComponent>;
  let reviewService: ReviewService;

  let saveReviewSpy: Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteReviewComponent],
      imports: [
        CommonPanelComponent,
        FormsModule,
        MatFormField,
        MatInput,
        MatLabel,
        MatError,
        BrowserAnimationsModule,
      ],
      providers: [
        ToastService,
        HttpClient,
        HttpHandler,
        { provide: ReviewService, useClass: ReviewServiceMock },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteReviewComponent);
    component = fixture.componentInstance;

    reviewService = TestBed.get(ReviewService);
    saveReviewSpy = spyOn(reviewService, 'addReview')
      .and
      .callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT called reviewService.addReview() when saved without values', () => {
    const sendFeedbackBtn = TestingUtils.queryByCss(fixture, '.ut-send-feedback-btn');
    sendFeedbackBtn.nativeElement.click();

    fixture.detectChanges();
    expect(saveReviewSpy)
      .not
      .toHaveBeenCalled();
  });

  it('should call reviewService.addReview() when saved with values', async () => {
    const companyNameInput = TestingUtils.queryByCss(fixture, '.ut-company-name');
    companyNameInput.nativeElement.value = 'MyBudget';
    companyNameInput.nativeElement.dispatchEvent(new Event('input'));

    const companyRepInput = TestingUtils.queryByCss(fixture, '.ut-company-rep');
    companyRepInput.nativeElement.value = 'Ben John Villanueva III';
    companyRepInput.nativeElement.dispatchEvent(new Event('input'));

    const companyRepEmailInput = TestingUtils.queryByCss(fixture, '.ut-company-rep-email');
    companyRepEmailInput.nativeElement.value = 'test@email.com';
    companyRepEmailInput.nativeElement.dispatchEvent(new Event('input'));

    const feedBackInput = TestingUtils.queryByCss(fixture, '.ut-feedback');
    feedBackInput.nativeElement.value = 'Ben John is the best at Angular';
    feedBackInput.nativeElement.dispatchEvent(new Event('input'));

    const sendFeedbackBtn = TestingUtils.queryByCss(fixture, '.ut-send-feedback-btn');
    sendFeedbackBtn.nativeElement.click();

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(saveReviewSpy)
      .toHaveBeenCalled();
  });
});
