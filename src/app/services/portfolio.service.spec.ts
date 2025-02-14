import { TestBed } from '@angular/core/testing';

import { PortfolioService } from './portfolio.service';
import { HttpClient, HttpHandler } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { of } from "rxjs";
import { WORK_EXPERIENCE_MOCK } from "../mocks/work-experience.mocks";

describe('PortfolioService', () => {
  let service: PortfolioService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpClient,
        HttpHandler,
      ],
    });
    service = TestBed.inject(PortfolioService);
    http = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the work experience when getWorkExperiencesPublic is called', () => {
    spyOn(http, 'get')
      .and
      .returnValue(of(WORK_EXPERIENCE_MOCK))

    service.getWorkExperiencesPublic()
      .subscribe((value) => {
        expect(value)
          .toBeTruthy();
      });
  });

  it('should get the work experience integrated when getWorkExperiencesIntegrated is called', () => {
    spyOn(http, 'get')
      .and
      .returnValue(of(WORK_EXPERIENCE_MOCK))

    service.getWorkExperiencesIntegrated()
      .subscribe((value) => {
        expect(value)
          .toBeTruthy();
      });
  });

  it('should get the work experience integrated when getWorkExperiencesIntegrated is called', () => {
    const mock = WORK_EXPERIENCE_MOCK[0];
    spyOn(http, 'put')
      .and
      .returnValue(of(mock))

    service.updateWorkExperience(mock)
      .subscribe((value) => {
        expect(value)
          .toBeTruthy();
      });
  });
});
