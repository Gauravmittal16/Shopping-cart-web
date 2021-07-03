import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import {CreateProductComponent} from './create-product/create-product.component';
import { UpdateProductComponent} from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: 'products', component: ProductsListComponent},
  {path: 'add-products', component: CreateProductComponent},
  {path: 'product/:id', component: UpdateProductComponent},
  {path: 'details/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [ProductsListComponent, CreateProductComponent, UpdateProductComponent, ProductDetailsComponent];
