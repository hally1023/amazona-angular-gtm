import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

export const apiUrl = 'http://localhost:5000/api';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiUrl = apiUrl;
  constructor(private http: HttpClient) {}
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  public getProductDetails(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${productId}`);
  }
}
