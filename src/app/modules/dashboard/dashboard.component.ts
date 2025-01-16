import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  public quoteOfTheDay!: string;

  constructor(private route: ActivatedRoute) {
    // Get the resolved data from the resolver
    this.route.data.subscribe((data) => {
      this.quoteOfTheDay = data['quote'];
    });
  }
}
