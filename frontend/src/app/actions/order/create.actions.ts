import { createAction, props } from '@ngrx/store';
import { CartItem } from 'src/app/models/cart-item.model';
import { Order } from 'src/app/models/order.model';
import { ShippingAddress } from 'src/app/models/shipping-address.model';

export interface OrderCreatePayload {
  cartItems: CartItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  orderItems: CartItem[];
}

export const orderCreate = createAction(
  '[Create] Order Create',
  props<{ order: OrderCreatePayload }>()
);

export const orderCreateSuccess = createAction(
  '[Create] Order Create Success',
  props<{ data: Order }>()
);

export const orderCreateFailure = createAction(
  '[Create] Order Create Failure',
  props<{ error: any }>()
);
