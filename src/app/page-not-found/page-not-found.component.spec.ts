import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { CommonPanelComponent } from "../shared/common-panel/common-panel.component";
import { TestingUtils } from "../testing/testing-utils";

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent],
      imports: [CommonPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotFoundComponent);
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
    const goBackBtn = TestingUtils.queryByCss(fixture, '.ut-go-back-btn');
    goBackBtn.nativeElement.click();
    fixture.detectChanges();

    expect(historyBackSpy)
      .toHaveBeenCalled();
  });
});
