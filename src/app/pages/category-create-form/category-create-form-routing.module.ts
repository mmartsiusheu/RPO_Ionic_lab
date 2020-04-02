import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryCreateFormPage } from './category-create-form.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryCreateFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryCreateFormPageRoutingModule {}
