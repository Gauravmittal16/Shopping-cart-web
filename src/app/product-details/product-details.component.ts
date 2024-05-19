import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../product';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { ProductsListComponent } from '../products-list/products-list.component';
//gyuhu
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: number;
  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

    this.product=new Product();
    this.id=this.route.snapshot.params['id'];
    
    this.productService.getDetails(this.id)
    .subscribe(data=> {
      console.log(data);
      this.product=data;
    },
    error=> console.log(error));

  }

  list()
  {
    this.router.navigate(['products']);
  }
}
