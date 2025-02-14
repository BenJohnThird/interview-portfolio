import { Injectable } from '@angular/core';
import { map, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { WorkExperience } from "../models/work-experience";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private baseUrl = environment.url;

  constructor(
    private http: HttpClient,
  ) { }

  public getWorkExperiencesPublic(): Observable<WorkExperience[]> {
    return this.http.get<WorkExperience[]>(`${this.baseUrl}WorkExperience/Public`)
      .pipe(
        map((workExperiences: WorkExperience[]) => {
          for (const workExperience of workExperiences) {
            workExperience.techStackString = workExperience.techStack.join("\n");
            workExperience.responsibilitiesString = workExperience.responsibilities.join("\n");
          }

          return workExperiences;
        }),
      );
  }

  public getWorkExperiencesIntegrated(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}WorkExperience`)
      .pipe(
        map((workExperiences: WorkExperience[]) => {
          for (const workExperience of workExperiences) {
            workExperience.techStackString = workExperience.techStack.join("\n");
            workExperience.responsibilitiesString = workExperience.responsibilities.join("\n");
          }

          return workExperiences;
        }),
      );
  }

  public updateWorkExperience(workExperience: WorkExperience): Observable<WorkExperience> {
    const url = `${this.baseUrl}WorkExperience/${workExperience.id}`;
    return this.http.put<WorkExperience>(url, workExperience);
  }
}
