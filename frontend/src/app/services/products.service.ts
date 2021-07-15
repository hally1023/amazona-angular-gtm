import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  public getProducts(): Observable<Array<Product>> {
    return this.http.get<Product[]>('http://localhost:5000/api/products');
  }
}
