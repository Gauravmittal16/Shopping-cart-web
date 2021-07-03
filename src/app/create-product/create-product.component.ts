import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product=new Product(0,"","","","");
  submitted=false;
  message:any;
  myForm: FormGroup;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void 
  {
  }


  onSubmit()
  {
    let resp=this.productService.createProduct(this.product);
    resp.subscribe((data)=>this.message=data);
    this.list();
  }

  list()
  {
    this.router.navigate(['products']);
  }

}
