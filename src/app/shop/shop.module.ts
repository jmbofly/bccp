import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './shop.component';
import { ShopItemListComponent } from './shop-item-list/shop-item-list.component';
import { ShopItemDetailsComponent } from './shop-item-details/shop-item-details.component';
import { ShopCategoriesComponent } from './shop-categories/shop-categories.component';

@NgModule({
  declarations: [ShopComponent, ShopItemListComponent, ShopItemDetailsComponent, ShopCategoriesComponent],
  imports: [SharedModule],
})
export class ShopModule {}
