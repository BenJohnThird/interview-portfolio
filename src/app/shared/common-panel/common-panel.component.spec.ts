import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPanelComponent } from './common-panel.component';

describe('CommonPanelComponent', () => {
  let component: CommonPanelComponent;
  let fixture: ComponentFixture<CommonPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
