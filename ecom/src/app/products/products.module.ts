import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductbyDateComponent } from './view-productby-date/view-productby-date.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    ViewProductComponent,
    UpdateProductComponent,
    ViewProductbyDateComponent,
    ViewProductByCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
