import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { Review } from "../models/review";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { IPage } from "../models/ipage";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private baseUrl = environment.url;

  constructor(private http: HttpClient) { }

  public getReviews(): Observable<Review[]> {
    return this.http.get<IPage<Review>>(`${this.baseUrl}review?pageSize=20&pageNumber=1`)
      .pipe(map(pagedReview => pagedReview.items))
  }

  public addReview(review: Review): Observable<Review> {
    const url = `${this.baseUrl}review`;
    return this.http.post<Review>(url, review);
  }
}
