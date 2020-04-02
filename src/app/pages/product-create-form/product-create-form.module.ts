import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCreateFormPageRoutingModule } from './product-create-form-routing.module';

import { ProductCreateFormPage } from './product-create-form.page';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ProductCreateFormPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [ProductCreateFormPage]
})
export class ProductCreateFormPageModule {}
