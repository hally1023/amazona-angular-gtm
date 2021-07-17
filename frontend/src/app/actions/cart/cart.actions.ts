import { createAction, props } from '@ngrx/store';
import { CartItem } from 'src/app/models/cart-item.model';
import { PaymentMethod } from 'src/app/models/payment-method.model';
import { ShippingAddress } from 'src/app/models/shipping-address.model';

export const cartAddItem = createAction(
  '[Cart] Add Item',
  props<{ item: CartItem }>()
);

export const cartRemoveItem = createAction(
  '[Cart] Remove Item',
  props<{ productId: string }>()
);

export const cartSaveShippingAddress = createAction(
  '[Cart] Save Shipping Address',
  props<{ shippingAddress: ShippingAddress }>()
);

export const cartSavePaymentMethod = createAction(
  '[Cart] Save Payment Method',
  props<{ paymentMethod: PaymentMethod }>()
);

export const cartEmpty = createAction('[Cart] Add Item');
