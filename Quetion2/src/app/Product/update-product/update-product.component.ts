import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Product from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  prod=new Product();
  constructor(private service:ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params=>{
      this.service.getproduct(params['id']).subscribe(
        (resp:any)=>{
          this.prod=resp;
          console.log(resp);
        },(err:any)=>{
          console.log(err);
        }
      )
    })
          
  }
  onUpdate(){
    this.service.updateProduct(this.prod);
    this.router.navigate(['/allproduct']);
  }

}
