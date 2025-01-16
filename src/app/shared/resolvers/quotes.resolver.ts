import { MaybeAsync, ResolveFn } from '@angular/router';

// Resolver to generate a quote before accessing a certain route
export const QuotesResolver: ResolveFn<boolean> = (): MaybeAsync<any> => {
  const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "Only those who dare to fail greatly can ever achieve greatly.",
    "It's not whether you get knocked down, it's whether you get back up.",
    "The future depends on what you do today.",
    "Nothing is troublesome that we do willingly."
  ];

  // Randomly select one quote
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};
