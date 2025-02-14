import { TestBed } from '@angular/core/testing';

import { QuoteService } from './quote.service';
import { HttpClient, HttpHandler } from "@angular/common/http";
import { of } from "rxjs";
import { QUOTES_MOCK } from "../mocks/quotes.mock";

describe('QuoteService', () => {
  let service: QuoteService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
      ],
    });
    service = TestBed.inject(QuoteService);
    http = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get random quote', () => {
    const mock = QUOTES_MOCK[0];
    spyOn(http, 'get')
      .and
      .returnValue(of(mock))

    service.getRandomQuote()
      .subscribe((data ) => {
        expect(data)
          .toBeTruthy(mock.quoteText)
      });
  })
});
