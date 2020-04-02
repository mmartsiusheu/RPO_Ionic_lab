import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryCreateFormPageRoutingModule } from './category-create-form-routing.module';

import { CategoryCreateFormPage } from './category-create-form.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CategoryCreateFormPageRoutingModule
  ],
  declarations: [CategoryCreateFormPage]
})
export class CategoryCreateFormPageModule {}
