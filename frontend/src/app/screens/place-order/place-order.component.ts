import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  orderCreate,
  orderCreateReset,
} from 'src/app/actions/order/create.actions';
import { CartItem } from 'src/app/models/cart-item.model';
import { PaymentMethod } from 'src/app/models/payment-method.model';
import { ShippingAddress } from 'src/app/models/shipping-address.model';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss'],
})
export class PlaceOrderComponent implements OnInit {
  placeOrderLoading: boolean | undefined;
  placeOrderSuccess: boolean | undefined;
  placeOrderError: any;

  shippingAddress: ShippingAddress | null = null;

  cartItems: CartItem[] = [];

  paymentMethod: PaymentMethod | undefined;

  toPrice(num: number): number {
    return Number(num.toFixed(2));
  }

  itemsPrice() {
    return this.toPrice(
      this.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    );
  }

  shippingPrice() {
    return this.itemsPrice() > 100 ? this.toPrice(0) : this.toPrice(10);
  }

  taxPrice() {
    return this.toPrice(0.15 * this.itemsPrice());
  }

  totalPrice() {
    return this.itemsPrice() + this.shippingPrice() + this.taxPrice();
  }

  placeOrderHandler() {
    if (this.paymentMethod && this.shippingAddress) {
      this.store.dispatch(
        orderCreate({
          order: {
            cartItems: this.cartItems,
            itemsPrice: this.itemsPrice(),
            orderItems: this.cartItems,
            paymentMethod: this.paymentMethod,
            shippingAddress: this.shippingAddress,
            shippingPrice: this.shippingPrice(),
            taxPrice: this.shippingPrice(),
            totalPrice: this.totalPrice(),
          },
        })
      );
    } else {
      alert('No Payment Method selected');
    }
  }

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.cart)
      .subscribe((cart) => {
        this.shippingAddress = cart.shippingAddress;
        this.cartItems = cart.cartItems;
        this.paymentMethod = cart.paymentMethod;

        if (!cart.paymentMethod) {
          this.router.navigate([`/payment`]);
        }
      });

    this.store
      .select((state) => state.orderCreate)
      .subscribe((orderCreate) => {
        this.placeOrderError = orderCreate.error;
        this.placeOrderLoading = orderCreate.loading;

        if (orderCreate.success) {
          this.router.navigate([`/show-order/${orderCreate.order?._id}`]);
          this.store.dispatch(orderCreateReset());
        }
      });
  }
}
