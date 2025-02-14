import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalLoaderComponent } from './global-loader.component';
import { NgxSpinnerComponent, NgxSpinnerService } from "ngx-spinner";
import { GlobalLoaderService } from "../services/global-loader.service";

describe('GlobalLoaderComponent', () => {
  let component: GlobalLoaderComponent;
  let fixture: ComponentFixture<GlobalLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GlobalLoaderComponent,
      ],
      imports: [
        NgxSpinnerComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngxSpinner.show() when current number is greater than zero', () => {
    const ngxSpinnerService: NgxSpinnerService = TestBed.get(NgxSpinnerService);
    const showSpy = spyOn(ngxSpinnerService, 'show')
      .and
      .callThrough();

    const globalLoaderService: GlobalLoaderService = TestBed.get(GlobalLoaderService);
    globalLoaderService.loaderStatus
      .next(5)

    fixture.detectChanges();
    expect(showSpy)
      .toHaveBeenCalled();
  });
});
