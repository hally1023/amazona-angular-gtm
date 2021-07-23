import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderCreatePayload } from '../actions/order/create.actions';
import { PaymentResultPayload } from '../actions/order/pay.actions';
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
    return this.http.get<Order>(`${this.apiUrl}/orders/${orderId}`);
  }

  public listOrders() {
    return this.http.get<Order[]>(`${this.apiUrl}/orders`);
  }

  public listOrderMine() {
    return this.http.get<Order[]>(`${this.apiUrl}/orders/mine`);
  }

  public payOrder(orderId: string, paymentResult: PaymentResultPayload) {
    return this.http.put<{ order: Order }>(
      `${this.apiUrl}/orders/${orderId}/pay`,
      paymentResult
    );
  }

  public refundOrder(orderId: string) {
    return this.http.put<{ order: Order }>(
      `${this.apiUrl}/orders/${orderId}/refund`,
      {}
    );
  }
}
