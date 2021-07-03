import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

private myurl= 'http://localhost:8080/products';

private durl= 'http://localhost:8080/delete';

  constructor(private http: HttpClient) { }

  doUpdate(id: number, product)
  {
    return this.http.put("http://localhost:8080/update", product,{responseType: 'text' as 'json'});
  }

  createProduct(product)
  {
    return this.http.post("http://localhost:8080/addProduct",product,{responseType: 'text' as 'json'});
  }

  getDetails(id: number): Observable<Product>
  {
    return this.http.get<Product>(`${this.myurl}/${id}`);
  }

  getProducts(): Observable<Product[]>
  {
  return this.http.get<Product[]>(this.myurl);
  }

  deleteData(id: number): Observable<Product>
  {
    return this.http.delete<Product>(`${this.durl}/${id}`);
  }



}
