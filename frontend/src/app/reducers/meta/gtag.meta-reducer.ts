import { LocalStorageService } from 'src/app/services/local-storage.service';
import { State } from 'src/app/reducers';
import { Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { listProducts } from 'src/app/actions/product/list-product.actions';
import { detailsProduct } from 'src/app/actions/product/details-product.actions';
import {
  cartAddItem,
  cartRemoveItem,
  cartSavePaymentMethod,
  cartSaveShippingAddress,
} from 'src/app/actions/cart/cart.actions';
import { orderPaySuccess } from 'src/app/actions/order/pay.actions';
import { orderDeliverSuccess } from 'src/app/actions/order/deliver.actions';
import { orderRefundSuccess } from 'src/app/actions/order/refund.actions';

export const gtag =
  (reducer: ActionReducer<State, any>): ActionReducer<State, Action> =>
  (state, action) => {
    switch (action.type) {
      case listProducts.type:
        console.log('LISTI ACTION', action);
        console.log('STATE', state);
        console.log(listProducts.type);

        break;

      case detailsProduct.type:
      // event({
      //   eventName: "view_item",
      //   details: {
      //     content_type: "product",
      //     items: [mapProductToGtag(action.payload)],
      //   },
      // });

      case cartAddItem.type:
      // event({
      //   eventName: "add_to_cart",
      //   details: {
      //     items: [mapCartItemToGtag(action.payload)],
      //   },
      // });

      case cartRemoveItem.type:
      // event({
      //   eventName: "remove_from_cart",
      //   details: {
      //     items: action.payload,
      //   },
      // });

      case cartSaveShippingAddress.type:
      // event({
      //   eventName: "begin_checkout",
      //   details: {
      //     items: cartItems.map((item) => mapCartItemToGtag(item)),
      //   },
      // });
      // event({
      //   eventName: "checkout_progress",
      //   details: {
      //     items: cartItems.map((item) => mapCartItemToGtag(item)),
      //   },
      // });

      case cartSavePaymentMethod.type:
      // event({
      //   eventName: "set_checkout_option",
      //   details: {
      //     checkout_step: 2,
      //     checkout_option: "payment method",
      //     value: action.payload,
      //   },
      // });
      // event({
      //   eventName: "checkout_progress",
      //   details: {
      //     items: cartItems.map((item) => mapCartItemToGtag(item)),
      //   },
      // });

      case orderPaySuccess.type:
      // event({
      //   eventName: "purchase",
      //   details: {
      //     transaction_id: order._id,
      //     value: order.itemsPrice,
      //     currency: "USD",
      //     tax: order.taxPrice,
      //     shipping: order.shippingPrice,
      //     items: order.orderItems.map((item) => mapCartItemToGtag(item)),
      //   },
      // });

      case orderDeliverSuccess.type:
      // event({
      //   eventName: "order_delivered",
      //   details: {
      //     transaction_id: order._id,
      //     value: order.itemsPrice,
      //     currency: "USD",
      //     tax: order.taxPrice,
      //     shipping: order.shippingPrice,
      //     items: order.orderItems.map((item) => mapCartItemToGtag(item)),
      //   },
      // });

      case orderRefundSuccess.type:
      // event({
      //   eventName: "refund",
      //   details: {
      //     transaction_id: order._id,
      //     value: order.itemsPrice,
      //     currency: "USD",
      //     tax: order.taxPrice,
      //     shipping: order.shippingPrice,
      //     items: order.orderItems.map((item) => mapCartItemToGtag(item)),
      //   },
      // });

      default:
        break;
    }

    return reducer(state, action);
  };

//   const mapCartItemToGtag = (product) => {
//     return {
//       name: product.name,
//       list_name: "List",
//       quantity: product?.qty,
//       price: product.price,
//     };
//   };

//   const mapProductToGtag = (product) => {
//     return {
//       id: product._id,
//       name: product.name,
//       list_name: "List",
//       brand: product.brand,
//       category: product.category,
//       quantity: product?.countInStock,
//       price: product.price,
//     };
//   };
