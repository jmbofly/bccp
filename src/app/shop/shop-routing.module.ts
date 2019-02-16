import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ShopItemListComponent } from './shop-item-list/shop-item-list.component';
import { ShopItemDetailsComponent } from './shop-item-details/shop-item-details.component';
import { ShopCategoriesComponent } from './shop-categories/shop-categories.component';

const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      {
        path: 'categories',
        component: ShopCategoriesComponent
      },
      {
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full'
      },
      {
        path: 'category/:category',
        component: ShopItemListComponent,
      },
      {
        path: 'product/:productId',
        component: ShopItemDetailsComponent,
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
