import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, Observable } from "rxjs";
import { Quote } from "../models/quote";

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private baseUrl = environment.url;

  constructor(private http: HttpClient) { }

  public getRandomQuote(): Observable<string> {
    return this.http.get<Quote>(`${this.baseUrl}Quotes/random`)
      .pipe(
        map((response) => response.quoteText)
      );
  }
}
