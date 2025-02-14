import { ReviewService } from "../services/review.service";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Review } from "../models/review";
import { REVIEW_MOCKS } from "./review.mocks";

@Injectable()
export class ReviewServiceMock extends ReviewService {

  public override getReviews(): Observable<Review[]> {
    return of(REVIEW_MOCKS);
  }

  public override addReview(review: Review): Observable<Review> {
    console.log(review);
    return of(review);
  }
}
