import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CategoriesPage} from './categories.page';

const routes: Routes = [
    {
        path: '',
        component: CategoriesPage,
    },
    {
        path: 'create',
        loadChildren: '../category-create-form/category-create-form.module#CategoryCreateFormPageModule'
    },
    {
        path: ':id',
        loadChildren: '../category-details/category-details.module#CategoryDetailsPageModule'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoriesPageRoutingModule {
}
