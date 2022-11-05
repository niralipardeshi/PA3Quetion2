import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { AllProductComponent } from './Product/all-product/all-product.component';
import { UpdateProductComponent } from './Product/update-product/update-product.component';

const routes: Routes = [
  {path:'product/addproduct',component:AddProductComponent},
  {path:'allproduct',component:AllProductComponent},
  {path:'product/editproduct/:id',component:UpdateProductComponent},
  {path:'',redirectTo:'allproduct',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
