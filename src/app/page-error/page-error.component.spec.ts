import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageErrorComponent } from './page-error.component';
import { CommonPanelComponent } from "../shared/common-panel/common-panel.component";
import { TestingUtils } from "../testing/testing-utils";

describe('PageErrorComponent', () => {
  let component: PageErrorComponent;
  let fixture: ComponentFixture<PageErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageErrorComponent],
      imports: [CommonPanelComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call window.history.back when goBack() is called', () => {
    // Spy on window.history.back
    const historyBackSpy = spyOn(window.history, 'back');

    // Trigger go back
    component.goBack();
    fixture.detectChanges();

    expect(historyBackSpy)
      .toHaveBeenCalled();
  });
});
