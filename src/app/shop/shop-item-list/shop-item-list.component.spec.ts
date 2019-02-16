import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemListComponent } from './shop-item-list.component';

describe('ShopItemListComponent', () => {
  let component: ShopItemListComponent;
  let fixture: ComponentFixture<ShopItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
