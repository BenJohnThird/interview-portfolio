import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperiencesFormComponent } from './work-experiences-form.component';
import { PipesModule } from "../../../../shared/pipes/pipes.module";
import { WorkExperience } from "../../../../models/work-experience";
import { Component, ViewChild } from "@angular/core";
import { WORK_EXPERIENCE_MOCK } from "../../../../mocks/work-experience.mocks";
import { MatIcon } from "@angular/material/icon";
import { TestingUtils } from "../../../../testing/testing-utils";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { FormsModule, NgForm } from "@angular/forms";
import { MatError, MatFormField, MatHint, MatLabel } from "@angular/material/form-field";
import { MatDatepicker, MatDatepickerModule, MatDatepickerToggle } from "@angular/material/datepicker";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideNativeDateAdapter } from "@angular/material/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInput } from "@angular/material/input";
import Spy = jasmine.Spy;
import { PortfolioService } from "../../../../services/portfolio.service";
import { of } from "rxjs";

@Component({
  template: `
    <app-work-experiences-form
      [(editingId)]="editingId"
      [workExperience]="workExperience">
    </app-work-experiences-form>
  `
})
class WorkExperiencesFormTestComponent {
  @ViewChild(WorkExperiencesFormComponent)
  public formComponent!: WorkExperiencesFormComponent;

  public workExperience: WorkExperience = WORK_EXPERIENCE_MOCK[0];

  public editingId!: number;
}

describe('WorkExperiencesFormComponent', () => {
  let component: WorkExperiencesFormTestComponent;
  let fixture: ComponentFixture<WorkExperiencesFormTestComponent>;
  let portfolioService: PortfolioService;
  let updateSpy: Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WorkExperiencesFormTestComponent,
        WorkExperiencesFormComponent,
      ],
      imports: [
        PipesModule,
        MatIcon,
        FormsModule,
        MatFormField,
        MatInput,
        MatLabel,
        MatError,
        MatHint,
        MatDatepickerToggle,
        MatDatepicker,
        MatDatepickerModule,
        BrowserAnimationsModule,
      ],
      providers: [
        HttpClient,
        HttpHandler,
        provideAnimationsAsync(),
        provideNativeDateAdapter()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperiencesFormTestComponent);
    component = fixture.componentInstance;

    portfolioService = TestBed.get(PortfolioService);
    updateSpy = spyOn(portfolioService, 'updateWorkExperience')
      .and
      .callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be in edit mode when edit is clicked', () => {
    const editBtn = TestingUtils.queryByCss(fixture, '.ut-edit-btn');
    editBtn.nativeElement.click();
    fixture.detectChanges();

    expect(component.formComponent.editMode)
      .toBeTruthy();
  });

  it('should have isEditDisabled if there is no editing id provided', () => {
    expect(component.formComponent.isEditDisabled)
      .toBeFalsy();
  });

  it('should have isEditDisabled to TRUE if editingId is not equals to the work experience id', () => {
    component.editingId = 5;
    fixture.detectChanges();

    expect(component.formComponent.isEditDisabled)
      .toBeTruthy();
  });

  it('should be able to call the cancel button when in edit mode', () => {
    const cancelBtnSpy = spyOn(component.formComponent, 'cancel')
      .and
      .callThrough();

    component.editingId = 1;
    fixture.detectChanges();

    component.formComponent.edit();
    fixture.detectChanges();

    const cancelBtnEl = TestingUtils.queryByCss(fixture, '.ut-cancel-btn');
    cancelBtnEl.nativeElement.click();
    fixture.detectChanges();

    expect(cancelBtnSpy)
      .toHaveBeenCalled();
  });

  it('should not save when save is called without passing the validation', async () => {
    const editBtnEl = TestingUtils.queryByCss(fixture, '.ut-edit-btn');
    editBtnEl.nativeElement.click();
    fixture.detectChanges();

    component.formComponent.editWorkExperience.name = '';
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const saveBtnEl = TestingUtils.queryByCss(fixture, '.ut-save-btn');
    saveBtnEl.nativeElement.click();
    fixture.detectChanges();

    expect(updateSpy)
      .not
      .toHaveBeenCalled();
  });

  it('should save when save is called passing the validation', async () => {
    updateSpy
      .and
      .returnValue(of(WORK_EXPERIENCE_MOCK[0]));

    const editBtnEl = TestingUtils.queryByCss(fixture, '.ut-edit-btn');
    editBtnEl.nativeElement.click();
    fixture.detectChanges();

    component.formComponent.editWorkExperience.endDate = '';
    fixture.detectChanges();

    const saveBtnEl = TestingUtils.queryByCss(fixture, '.ut-save-btn');
    saveBtnEl.nativeElement.click();
    fixture.detectChanges();

    expect(updateSpy)
      .toHaveBeenCalled();
  });

  it('should return throw when there is code error', async () => {
    const editBtnEl = TestingUtils.queryByCss(fixture, '.ut-edit-btn');
    editBtnEl.nativeElement.click();
    fixture.detectChanges();

    component.formComponent.editWorkExperience.techStackString = '';
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    try {
      const mockForm = { invalid: false } as NgForm;
      await component.formComponent.save(mockForm)
    } catch (e) {
      expect(e)
        .toBeTruthy();
    }
  })
});
