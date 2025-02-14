import { MaybeAsync, ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { QuoteService } from "../../services/quote.service";

// Resolver to generate a quote before accessing a certain route
export const QuotesResolver: ResolveFn<boolean> = (): MaybeAsync<any> => {
  const quoteService = inject(QuoteService);
  return quoteService.getRandomQuote();
};
