import { Component, OnInit } from '@angular/core';
import { WorkExperience } from "../models/work-experience";
import { PortfolioService } from "../services/portfolio.service";

@Component({
  selector: 'app-work-experiences',
  templateUrl: './work-experiences.component.html',
  styleUrl: './work-experiences.component.scss'
})
export class WorkExperiencesComponent implements OnInit {

  public workExperiences!: WorkExperience[];

  public constructor(
    private portfolioService: PortfolioService,
  ) {}

  public ngOnInit(): void {
    this.portfolioService
      .getWorkExperiencesPublic()
      .subscribe((workExperiences: WorkExperience[]) => this.workExperiences = workExperiences);
  }
}
