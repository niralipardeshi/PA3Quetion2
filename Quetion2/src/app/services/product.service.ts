import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import Product from '../models/product.model'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Product=new Product();
  url=environment.BaseUri;
  constructor(private http:HttpClient) { }

  addProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.url,product);
  }

  listProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }

  getproduct(_id:any):Observable<Product>{
    return this.http.get<Product>(this.url+"/"+_id);
  }

  updateProduct(prod:Product){
    this.http.put(`${this.url}/${prod._id}`,prod).subscribe(res=>console.log("Done"));
  }

  deleteProduct(_id:any):Observable<Product>{
    return this.http.delete<Product>(this.url+"/"+_id);
  }
  // deleteProduct(_id:any):Observable<Product>{
  //   this.http.delete(`${this.url}/${_id}`);
  // }

}
