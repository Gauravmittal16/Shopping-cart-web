import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
import { ProductService } from "../product.service";
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public products= [];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(){
   
   this.productService.getProducts()
   .subscribe(data=> this.products=data);
   }
   updateData(id: number)
   {
     this.router.navigate(['product', id]);
   }

   detailedData(id: number)
   {
   this.router.navigate(['details', id]); 
   }
   confirmDelete(id: number)
   {
     if(confirm('Are you sure to delete the record')==true)
     {
              this.productService.deleteData(id)
              .subscribe(data=> 
              {console.log(data);
                this.productService.getProducts()
                .subscribe(data=> this.products=data);
                              
              },
              error=> console.log(error));
     }
   }

}
