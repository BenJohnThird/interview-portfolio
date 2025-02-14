import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WorkExperience } from "../../../../models/work-experience";
import { clone } from "../../../../utils/clone";
import { touchForm } from "../../../../utils/touch-form";
import { NgForm } from "@angular/forms";
import { PortfolioService } from "../../../../services/portfolio.service";
import moment from 'moment';

@Component({
  selector: 'app-work-experiences-form',
  templateUrl: './work-experiences-form.component.html',
  styleUrl: './work-experiences-form.component.scss'
})
export class WorkExperiencesFormComponent implements OnInit {

  @Input()
  public workExperience!: WorkExperience;

  @Input()
  public last!: boolean;

  @Input()
  public editingId!: number;

  @Output()
  public editingIdChange: EventEmitter<number | null> = new EventEmitter<number | null>();

  @Output()
  public saved: EventEmitter<void> = new EventEmitter<void>();

  public editMode!: boolean;

  public editWorkExperience!: WorkExperience;

  constructor(
    private portfolioService: PortfolioService,
  ) {}

  public ngOnInit(): void { }

  public get isEditDisabled(): boolean {
    if (!this.editingId) {
      return false;
    }

    return this.workExperience.id !== this.editingId;
  }

  public edit(): void {
    this.editMode = true;
    this.editWorkExperience = clone(this.workExperience);
    this.editingIdChange.emit(this.editWorkExperience.id);
  }

  public cancel(): void {
    this.editMode = false;
    this.editingIdChange.emit(null);
  }

  public async save(form: NgForm): Promise<void> {
    try {
      touchForm(form);
      if (form.invalid) {
        return;
      }

      this.editWorkExperience.responsibilities = this.editWorkExperience.responsibilitiesString!.split("\n");
      this.editWorkExperience.techStack = this.editWorkExperience.techStackString!.split("\n");
      this.editWorkExperience.startDate = this.formatDate(this.editWorkExperience.startDate);
      this.editWorkExperience.endDate = this.formatDate(this.editWorkExperience.endDate!);

      await this.portfolioService
        .updateWorkExperience(this.editWorkExperience)
        .toPromise();

      this.saved.emit();
      this.cancel();
    } catch (e) {
      throw e;
    }
  }

  private formatDate(date: string): string {
    if (!date) {
      return date;
    }

    return moment(date).format("YYYY-MM-DD");
  }
}
