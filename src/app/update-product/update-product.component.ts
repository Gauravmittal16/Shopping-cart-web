import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: number;
  message: any;
  product: Product;
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) 
  { }

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

  onDone()
  {
       let resp=this.productService.doUpdate(this.id,this.product);
       resp.subscribe((data)=>this.message=data);
       this.list();
  }

  list()
  {
    this.router.navigate(['products']);
  }

}
