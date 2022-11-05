import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product.model'
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addprod=new Product()
  constructor(private service:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.addProduct(this.addprod).subscribe(
      (resp:any)=>{
        console.log(resp.data);
        this.router.navigate(['/allproduct']);
      },(err:any)=>{
        console.log(err);
      }
    )
  }

}
