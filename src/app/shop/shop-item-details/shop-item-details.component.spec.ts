import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemDetailsComponent } from './shop-item-details.component';

describe('ShopItemDetailsComponent', () => {
  let component: ShopItemDetailsComponent;
  let fixture: ComponentFixture<ShopItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
