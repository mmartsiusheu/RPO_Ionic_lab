import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCreateFormPage } from './product-create-form.page';

const routes: Routes = [
  {
    path: '',
    component: ProductCreateFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCreateFormPageRoutingModule {}
