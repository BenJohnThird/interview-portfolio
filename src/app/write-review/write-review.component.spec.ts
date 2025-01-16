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

describe('WriteReviewComponent', () => {
  let component: WriteReviewComponent;
  let fixture: ComponentFixture<WriteReviewComponent>;

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
        ReviewService,
        ToastService,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteReviewComponent);
    component = fixture.componentInstance;

    const reviewService = TestBed.get(ReviewService);
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

  it('should call reviewService.addReview() when saved with values', () => {
    const companyNameInput = TestingUtils.queryByCss(fixture, '.ut-company-name');
    companyNameInput.nativeElement.value = 'MyBudget';
    companyNameInput.nativeElement.dispatchEvent(new Event('input'));

    const companyRepInput = TestingUtils.queryByCss(fixture, '.ut-company-rep');
    companyRepInput.nativeElement.value = 'Ben John Villanueva III';
    companyRepInput.nativeElement.dispatchEvent(new Event('input'));

    const feedBackInput = TestingUtils.queryByCss(fixture, '.ut-feedback');
    feedBackInput.nativeElement.value = 'Ben John is the best at Angular';
    feedBackInput.nativeElement.dispatchEvent(new Event('input'));

    const sendFeedbackBtn = TestingUtils.queryByCss(fixture, '.ut-send-feedback-btn');
    sendFeedbackBtn.nativeElement.click();

    fixture.detectChanges();
    expect(saveReviewSpy)
      .toHaveBeenCalled();
  });
});
