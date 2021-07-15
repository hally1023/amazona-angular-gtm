import { createAction, props } from '@ngrx/store';
import { CartItem } from 'src/app/models/cart-item.model';
import { ShippingAddress } from 'src/app/models/shipping-address.model';

export const cartAddItem = createAction('[Cart] Add Item', props<CartItem>());

export const cartRemoveItem = createAction(
  '[Cart] Remove Item',
  props<{ productId: string }>()
);

export const cartSaveShippingAddress = createAction(
  '[Cart] Save Shipping Address',
  props<ShippingAddress>()
);

export const cartSavePaymentMethod = createAction(
  '[Cart] Save Payment Method',
  props<{ paymentMethod: 'PayPal' | 'Stripe' }>()
);

export const cartEmpty = createAction('[Cart] Add Item');
