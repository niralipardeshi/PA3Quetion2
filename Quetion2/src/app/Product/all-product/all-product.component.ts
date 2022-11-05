import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import Product from 'src/app/models/product.model'

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

  product=new Array<Product>()
  prod=new Product()
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.listProduct();
  }


  DelProduct(id:any)
  {
    this.service.deleteProduct(id).subscribe(
      (resp:any)=>{
        console.log("deleted",resp);
        this.ngOnInit();
      },(err:any)=>{
        console.log(err);
      }
    )
  }

  listProduct(){
    this.service.listProduct().subscribe(
      (resp:any)=>{
        this.product=resp;
        console.log(resp);
      },(err:any)=>{
        console.log(err);
      }
    )
  }

 

}
