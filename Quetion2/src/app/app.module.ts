import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { AllProductComponent } from './Product/all-product/all-product.component';
import { UpdateProductComponent } from './Product/update-product/update-product.component';


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    AllProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
