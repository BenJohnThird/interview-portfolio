import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { REVIEW_MOCKS } from "../mocks/review.mocks";
import { Review } from "../models/review";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  public getReviews(): Observable<Review[]> {
    return of(REVIEW_MOCKS);
  }

  public addReview(review: Review): Observable<Review> {
    REVIEW_MOCKS.push(review);
    return of(review);
  }
}
