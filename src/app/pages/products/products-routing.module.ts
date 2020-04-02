import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
  },
  {
    path: 'create',
    loadChildren: '../product-create-form/product-create-form.module#ProductCreateFormPageModule'
  },
  {
    path: ':id',
    loadChildren: '../product-details/product-details.module#ProductDetailsPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}
