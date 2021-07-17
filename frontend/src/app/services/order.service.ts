import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderCreatePayload } from '../actions/order/create.actions';
import { Order } from '../models/order.model';
import { apiUrl } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  apiUrl = apiUrl;
  constructor(private http: HttpClient) {}

  public createOrder(order: OrderCreatePayload) {
    return this.http.post<{ order: Order; message: string }>(
      `${this.apiUrl}/orders`,
      order
    );
  }

  public deleteOrder(orderId: string) {
    return this.http.delete(`${this.apiUrl}/orders/${orderId}`);
  }

  public deliverOrder(orderId: string) {
    return this.http.put(`${this.apiUrl}/orders/${orderId}/deliver`, {});
  }

  public detailsOrder(orderId: string) {
    return this.http.get<Order>(`${this.apiUrl}/orders/${orderId}/deliver`);
  }
}
