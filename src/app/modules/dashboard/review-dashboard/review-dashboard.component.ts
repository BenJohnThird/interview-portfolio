import { Component, OnInit } from '@angular/core';
import { ReviewService } from "../../../services/review.service";
import { Review } from "../../../models/review";

@Component({
  selector: 'app-review-dashboard',
  templateUrl: './review-dashboard.component.html',
  styleUrl: './review-dashboard.component.scss'
})
export class ReviewDashboardComponent implements OnInit {

  public reviews!: Review[];

  constructor(private reviewService: ReviewService) {
  }

  public ngOnInit(): void {
    this.reviewService
      .getReviews()
      .subscribe((review) => this.reviews = review);
  }
}
