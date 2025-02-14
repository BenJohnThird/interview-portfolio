import { PortfolioService } from "../services/portfolio.service";
import { Observable, of } from "rxjs";
import { WORK_EXPERIENCE_MOCK } from "./work-experience.mocks";
import { Injectable } from "@angular/core";
import { WorkExperience } from "../models/work-experience";

@Injectable()
export class PortfolioServiceMock extends PortfolioService {

  public override getWorkExperiencesIntegrated(): Observable<any> {
    return of(WORK_EXPERIENCE_MOCK);
  }

  public override getWorkExperiencesPublic(): Observable<WorkExperience[]> {
    return of(WORK_EXPERIENCE_MOCK);
  }
}
