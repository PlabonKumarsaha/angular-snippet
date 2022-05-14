import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsComponent } from './products.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewProductbyDateComponent } from './view-productby-date/view-productby-date.component';

const routes: Routes = [{ path: '', component: ProductsComponent },
          { path: 'add-product', component: AddProductComponent },
          { path: 'view-product/:id', component:ViewProductComponent },
          { path: 'list-product', component: ViewAllProductComponent},
          { path: 'search-catgory', component: ViewProductByCategoryComponent },
          { path: 'update-product/:id', component:ViewProductComponent },
          { path: 'search-date', component: ViewProductbyDateComponent}
        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
