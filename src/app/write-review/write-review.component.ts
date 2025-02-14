import { Component, ViewChild } from '@angular/core';
import { ReviewService } from "../services/review.service";
import { Review } from "../models/review";
import { NgForm } from "@angular/forms";
import { touchForm } from "../utils/touch-form";
import { ToastService } from "../services/toast.service";

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrl: './write-review.component.scss'
})
export class WriteReviewComponent {

  @ViewChild(NgForm)
  public form!: NgForm;

  public review: Review = { companyName: '', companyRepresentativeName: '',companyRepresentativeEmail: '', feedback: '' };

  constructor(
    private reviewService: ReviewService,
    private toastService: ToastService,
  ) { }

  /**
   * Lets save the review that has been made
   */
  public save(): void {
    touchForm(this.form);
    if (this.form.invalid) {
      return;
    }

    this.review.createdDate = new Date();
    this.reviewService.addReview(this.review)
      .subscribe(() => {
        // Reset the form;
        this.form.resetForm();

        this.toastService.showSuccess('Feedback successfully submitted');
      });
  }
}
