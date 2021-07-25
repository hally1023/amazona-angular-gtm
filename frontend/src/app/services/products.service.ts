import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

export const apiUrl = '/api';

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

  public deleteProduct(productId: string) {
    return this.http.delete(`${this.apiUrl}/products/${productId}`);
  }

  public updateProduct(product: Partial<Product>) {
    return this.http.put<Product>(
      `${this.apiUrl}/products/${product._id}`,
      product
    );
  }

  public createProduct() {
    return this.http.post<{ product: Product }>(`${this.apiUrl}/products`, {});
  }
}
