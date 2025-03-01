import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkExperiencesComponent } from './work-experiences.component';
import { CommonPanelComponent } from "../shared/common-panel/common-panel.component";
import Spy = jasmine.Spy;
import { PortfolioService } from "../services/portfolio.service";
import { PipesModule } from "../shared/pipes/pipes.module";
import { TestingUtils } from "../testing/testing-utils";
import { PortfolioServiceMock } from "../mocks/portfolio-service.mock";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe('WorkExperiencesComponent', () => {
  let component: WorkExperiencesComponent;
  let fixture: ComponentFixture<WorkExperiencesComponent>;

  let portfolioSpy: Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkExperiencesComponent],
      imports: [
        CommonPanelComponent,
        PipesModule,
      ],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: PortfolioService, useClass: PortfolioServiceMock },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperiencesComponent);
    component = fixture.componentInstance;

    const portfolioService: PortfolioService = TestBed.get(PortfolioService);
    portfolioSpy = spyOn(portfolioService, 'getWorkExperiencesPublic')
      .and
      .callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call portfolioService.getWorkExperiences', () => {
    expect(portfolioSpy)
      .toHaveBeenCalled();
  });

  it('should have company details if it has value', () => {
    const companyDetails = TestingUtils.queryByCss(fixture, '.ut-company-details');
    expect(companyDetails)
      .toBeTruthy();
  });

  it('should not have company details if work experiences is null', () => {
    component.workExperiences = [];
    fixture.detectChanges();

    const companyDetails = TestingUtils.queryByCss(fixture, '.ut-company-details');
    expect(companyDetails)
      .toBeFalsy();
  });

  it('should display the same number of company details based on the length of returned experiences', () => {
    const companyDetailsLength = TestingUtils.queryAllByCss(fixture, '.ut-company-details');
    expect(companyDetailsLength.length)
      .toBe(component.workExperiences.length);
  });

  it('should not display any technology used value when there are no technology used from the data received', async () => {
    const workExperienceLength = component.workExperiences.length;
    component.workExperiences[workExperienceLength - 1].techStack = [];
    console.log(component.workExperiences, 'WORK EXPERIENCES');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const technologyUsed = TestingUtils.queryByCss(fixture, '.ut-technology-used');
    expect(technologyUsed.nativeElement.textContent)
      .toBe('');
  });
});
