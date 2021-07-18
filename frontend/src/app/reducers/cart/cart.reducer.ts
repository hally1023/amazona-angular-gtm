import { Action, createReducer, on } from '@ngrx/store';
import {
  cartAddItemSuccess,
  cartEmpty,
  cartRemoveItem,
  cartSavePaymentMethod,
  cartSaveShippingAddress,
} from 'src/app/actions/cart/cart.actions';
import { CartItem } from 'src/app/models/cart-item.model';
import { PaymentMethod } from 'src/app/models/payment-method.model';
import { ShippingAddress } from 'src/app/models/shipping-address.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

export const cartFeatureKey = 'cart';

const localStorageService = new LocalStorageService();

export interface State {
  cartItems: CartItem[];
  shippingAddress: ShippingAddress | null;
  paymentMethod?: PaymentMethod;
}

export const initialState: State = {
  cartItems: localStorageService.getCartItems(),
  shippingAddress: localStorageService.getShippingAddress(),
};

export const reducer = createReducer(
  initialState,
  on(cartAddItemSuccess, (state, { item }) => {
    const existItem = state.cartItems.find((x) => x.product === item.product);
    if (existItem) {
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.product === existItem.product ? item : x
        ),
      };
    } else {
      return { ...state, cartItems: [...state.cartItems, item] };
    }
  }),
  on(cartRemoveItem, (state, { productId }) => {
    return {
      ...state,
      cartItems: state.cartItems.filter((x) => x.product !== productId),
    };
  }),
  on(cartSaveShippingAddress, (state, { shippingAddress }) => ({
    ...state,
    shippingAddress,
  })),
  on(cartSavePaymentMethod, (state, { paymentMethod }) => ({
    ...state,
    paymentMethod,
  })),
  on(cartEmpty, (state) => ({ ...state, cartItems: [] }))
);
