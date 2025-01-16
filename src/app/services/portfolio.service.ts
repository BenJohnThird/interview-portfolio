import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { WorkExperience } from "../models/work-experience";
import { WORK_EXPERIENCE_MOCK } from "../mocks/work-experience.mocks";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  public getWorkExperiences(): Observable<WorkExperience[]> {
    return of(WORK_EXPERIENCE_MOCK);
  }
}
