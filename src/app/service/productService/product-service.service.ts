import { Injectable } from '@angular/core';
import {Product} from "../../../models/Product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private http: HttpClient) { }

  showProduct: Product = new Product(0,0,"","",true);

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/products');
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>("http://localhost:8080/products/" + id);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/products/${id}`);
  }

  create(product: Product): Observable<any> {
    return this.http.post('http://localhost:8080/products', product);
  }

  edit(product: Product): Observable<any> {
    return this.http.put('http://localhost:8080/products/'+ product.id, product);
  }

  find(product: Product) {
    this.showProduct = product;
  }

}
