import { TestBed } from '@angular/core/testing';

import { ReviewService } from './review.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { IPage } from "../models/ipage";
import { Review } from "../models/review";
import { REVIEW_MOCKS } from "../mocks/review.mocks";
import { of } from "rxjs";

describe('ReviewService', () => {
  let service: ReviewService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ReviewService);
    http = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the paginated reviews when getReviews is called', () => {
    const pagedReview: IPage<Review> = {
      items: REVIEW_MOCKS, itemsFrom: 0, itemsTo: 0, totalItemsCount: 0
    };
    spyOn(http, 'get')
      .and
      .returnValue(of(pagedReview))

    service.getReviews()
      .subscribe((value) => {
        expect(value)
          .toBe(pagedReview.items)
      });
  });

  it('should return the added review when addReview() is called', () => {
    const review: Review = {
      companyName: "",
      companyRepresentativeEmail: "",
      companyRepresentativeName: "",
      feedback: ""
    };
    spyOn(http, 'post')
      .and
      .returnValue(of(review))

    service.addReview(review)
      .subscribe((value) => {
        expect(value)
          .toBe(review)
      });
  });
});
