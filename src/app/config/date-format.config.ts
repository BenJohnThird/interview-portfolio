import { MatDateFormats } from '@angular/material/core';

export const MY_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'YYYY-MM-DD',  // format to parse the input
  },
  display: {
    dateInput: 'YYYY-MM-DD',  // format for displaying the input
    monthYearLabel: 'MMM YYYY', // Format for month-year in the Datepicker
    dateA11yLabel: 'LL',        // Accessibility label for the date
    monthYearA11yLabel: 'MMMM YYYY', // Accessibility label for month-year
  },
};
