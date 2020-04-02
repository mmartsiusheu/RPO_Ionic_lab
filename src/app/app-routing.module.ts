import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full'
    },
    {
        path: 'categories',
        loadChildren: './pages/categories/categories.module#CategoriesPageModule'
    },
    {
        path: 'products',
        loadChildren: './pages/products/products.module#ProductsPageModule'
    },
  {
    path: 'product-create-form',
    loadChildren: () => import('./pages/product-create-form/product-create-form.module').then( m => m.ProductCreateFormPageModule)
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
