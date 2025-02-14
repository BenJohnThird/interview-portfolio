import { Component, OnInit } from '@angular/core';
import { PortfolioService } from "../../../services/portfolio.service";
import { WorkExperience } from "../../../models/work-experience";

@Component({
  selector: 'app-work-experiences-dashboard',
  templateUrl: './work-experiences-dashboard.component.html',
  styleUrl: './work-experiences-dashboard.component.scss'
})
export class WorkExperiencesDashboardComponent implements OnInit {

  public workExperiences!: WorkExperience[];

  public editingId!: number;

  constructor(
    private portfolioService: PortfolioService,
  ) { }

  public trackByIndex(index: number): number {
    return index;
  }

  public ngOnInit(): void {
    this.getWorkExperiences();
  }

  public getWorkExperiences(): void {
    this.portfolioService
      .getWorkExperiencesIntegrated()
      .subscribe((workExperiences: WorkExperience[]) => {
        this.workExperiences = workExperiences;
      });
  }
}
