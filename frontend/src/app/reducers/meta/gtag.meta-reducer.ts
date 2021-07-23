import { State } from 'src/app/reducers';
import { ActionReducer, MetaReducer } from '@ngrx/store';
import { listProductsSuccess } from 'src/app/actions/product/list-product.actions';
import { detailsProductSuccess } from 'src/app/actions/product/details-product.actions';
import {
  cartAddItem,
  cartAddItemSuccess,
  cartRemoveItem,
  cartSavePaymentMethod,
  cartSaveShippingAddress,
} from 'src/app/actions/cart/cart.actions';
import { orderPaySuccess } from 'src/app/actions/order/pay.actions';
import { orderDeliverSuccess } from 'src/app/actions/order/deliver.actions';
import { orderRefundSuccess } from 'src/app/actions/order/refund.actions';
import { GtagService } from 'src/app/services/gtag.service';
import { Product } from 'src/app/models/product.model';
import { CartItem } from 'src/app/models/cart-item.model';

const gtagService = new GtagService();

export const gtag =
  (reducer: ActionReducer<State, any>): ActionReducer<State, any> =>
  (state, action) => {
    const cartItems = state?.cart.cartItems;

    switch (action.type) {
      case listProductsSuccess.type:
        gtagService.eventEmit({
          eventName: 'view_item_list',
          details: {
            items: action.data.map((product: Product) =>
              gtagService.mapProductToGtag(product)
            ),
          },
        });

        break;

      case detailsProductSuccess.type:
        gtagService.eventEmit({
          eventName: 'view_item',
          details: {
            content_type: 'product',
            items: [gtagService.mapProductToGtag(action.data)],
          },
        });

        break;

      case cartAddItemSuccess.type:
        gtagService.eventEmit({
          eventName: 'add_to_cart',
          details: {
            items: [gtagService.mapCartItemToGtag(action.item)],
          },
        });
        break;

      case cartRemoveItem.type:
        gtagService.eventEmit({
          eventName: 'remove_from_cart',
          details: {
            items: action.productId,
          },
        });
        break;

      case cartSaveShippingAddress.type:
        gtagService.eventEmit({
          eventName: 'begin_checkout',
          details: {
            items: cartItems?.map((item) =>
              gtagService.mapCartItemToGtag(item)
            ),
          },
        });
        gtagService.eventEmit({
          eventName: 'checkout_progress',
          details: {
            items: cartItems?.map((item) =>
              gtagService.mapCartItemToGtag(item)
            ),
          },
        });

        break;
      case cartSavePaymentMethod.type:
        gtagService.eventEmit({
          eventName: 'set_checkout_option',
          details: {
            checkout_step: 2,
            checkout_option: 'payment method',
            value: action.paymentMethod,
          },
        });

        gtagService.eventEmit({
          eventName: 'checkout_progress',
          details: {
            items: cartItems?.map((item) =>
              gtagService.mapCartItemToGtag(item)
            ),
          },
        });
        break;

      case orderPaySuccess.type:
        gtagService.eventEmit({
          eventName: 'purchase',
          details: {
            transaction_id: action.order?._id,
            value: action.order?.itemsPrice,
            currency: 'USD',
            tax: action.order?.taxPrice,
            shipping: action.order?.shippingPrice,
            items: action.order?.orderItems.map((item: CartItem) =>
              gtagService.mapCartItemToGtag(item)
            ),
          },
        });
        break;

      case orderDeliverSuccess.type:
        gtagService.eventEmit({
          eventName: 'order_delivered',
          details: {
            transaction_id: action.order?._id,
            value: action.order?.itemsPrice,
            currency: 'USD',
            tax: action.order?.taxPrice,
            shipping: action.order?.shippingPrice,
            items: action.order?.orderItems.map((item: CartItem) =>
              gtagService.mapCartItemToGtag(item)
            ),
          },
        });

        break;

      case orderRefundSuccess.type:
        gtagService.eventEmit({
          eventName: 'refund',
          details: {
            transaction_id: action.order?._id,
            value: action.order?.itemsPrice,
            currency: 'USD',
            tax: action.order?.taxPrice,
            shipping: action.order?.shippingPrice,
            items: action.order?.orderItems.map((item: CartItem) =>
              gtagService.mapCartItemToGtag(item)
            ),
          },
        });

        break;

      default:
        break;
    }

    return reducer(state, action);
  };
