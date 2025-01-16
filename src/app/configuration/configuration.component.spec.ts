import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigurationComponent } from './configuration.component';
import { CommonPanelComponent } from "../shared/common-panel/common-panel.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatIcon } from "@angular/material/icon";
import { TestingUtils } from "../testing/testing-utils";
import Spy = jasmine.Spy;
import { LocalStorageService } from "../services/local-storage.service";

describe('ConfigurationComponent', () => {
  let component: ConfigurationComponent;
  let fixture: ComponentFixture<ConfigurationComponent>;

  let localStorageSpy: Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigurationComponent],
      imports: [
        CommonPanelComponent,
        FormsModule,
        MatFormField,
        MatInput,
        MatLabel,
        MatError,
        MatIcon,
        BrowserAnimationsModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationComponent);
    component = fixture.componentInstance;

    const localStorageService = TestBed.get(LocalStorageService);
    localStorageSpy = spyOn(localStorageService, 'setLocalStorageKey')
      .and
      .callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the editMode to TRUE when edit button is clicked', () => {
    const editBtn = TestingUtils.queryByCss(fixture, '.ut-edit-btn');
    editBtn.nativeElement.click();
    fixture.detectChanges();

    expect(component.editMode)
      .toBeTruthy();
  });

  it('should set the editMode to FALSE when cancel button is clicked', () => {
    component.edit();
    fixture.detectChanges();

    const cancelBtn = TestingUtils.queryByCss(fixture, '.ut-cancel-btn');
    cancelBtn.nativeElement.click();
    fixture.detectChanges();

    expect(component.editMode)
      .toBeFalsy();
  });

  it('should call localStorageService.setLocalStorageKey() when save button is clicked', () => {
    component.edit();
    fixture.detectChanges();

    const saveBtn = TestingUtils.queryByCss(fixture, '.ut-save-btn');
    saveBtn.nativeElement.click();
    fixture.detectChanges();

    expect(localStorageSpy)
      .toHaveBeenCalled();
  });
});
