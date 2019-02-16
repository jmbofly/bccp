import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BccpSliderComponent } from './bccp-slider.component';

describe('BccpSliderComponent', () => {
  let component: BccpSliderComponent;
  let fixture: ComponentFixture<BccpSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BccpSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BccpSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
