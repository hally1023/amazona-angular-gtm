import { State } from 'src/app/reducers';
import { ActionReducer, MetaReducer } from '@ngrx/store';
import { listProductsSuccess } from 'src/app/actions/product/list-product.actions';
import { detailsProductSuccess } from 'src/app/actions/product/details-product.actions';
import {
  cartAddItemSuccess,
  cartRemoveItem,
  cartSavePaymentMethod,
  cartSaveShippingAddress,
} from 'src/app/actions/cart/cart.actions';
import { orderPaySuccess } from 'src/app/actions/order/pay.actions';
import { orderDeliverSuccess } from 'src/app/actions/order/deliver.actions';
import { orderRefundSuccess } from 'src/app/actions/order/refund.actions';
import { GtmService } from 'src/app/services/gtm.service';
import { Product } from 'src/app/models/product.model';
import { CartItem } from 'src/app/models/cart-item.model';

const currencyCode = 'USD';

const gtmService = new GtmService();

export const gtm =
  (reducer: ActionReducer<State, any>): ActionReducer<State, any> =>
  (state, action) => {
    const cartItems = state?.cart.cartItems;

    switch (action.type) {
      case listProductsSuccess.type:
        dataLayer.push({ ecommerce: null });
        dataLayer.push({
          ecommerce: {
            currencyCode, // Local currency is optional.
            impressions: action.data.map((product: Product) =>
              gtmService.mapProductToGtm(product)
            ),
          },
        });

        break;

      case detailsProductSuccess.type:
        dataLayer.push({ ecommerce: null });
        dataLayer.push({
          ecommerce: {
            detail: {
              actionField: { list: 'Apparel Gallery' }, // 'detail' actions have an optional list property.
              products: [gtmService.mapProductToGtm(action.data)],
            },
          },
        });
        break;

      case cartAddItemSuccess.type:
        dataLayer.push({ ecommerce: null });
        dataLayer.push({
          event: 'addToCart',
          ecommerce: {
            currencyCode,
            add: {
              products: [gtmService.mapCartItemToGtm(action.item)],
            },
          },
        });
        break;

      case cartRemoveItem.type:
        dataLayer.push({ ecommerce: null });
        dataLayer.push({
          event: 'removeFromCart',
          ecommerce: {
            remove: {
              // 'remove' actionFieldObject measures.
              products: [action.productId],
            },
          },
        });
        break;

      case cartSaveShippingAddress.type:
        dataLayer.push({ ecommerce: null });
        dataLayer.push({
          event: 'checkout',
          ecommerce: {
            checkout: {
              products: cartItems?.map((item) =>
                gtmService.mapCartItemToGtm(item)
              ),
            },
          },
        });
        break;

      case cartSavePaymentMethod.type:
        dataLayer.push({ ecommerce: null });
        dataLayer.push({
          event: 'checkoutOption',
          ecommerce: {
            checkout_option: {
              actionField: {
                step: 'payment method',
                option: action.paymentMethod,
              },
            },
          },
        });
        break;

      case orderPaySuccess.type:
        dataLayer.push({ ecommerce: null });
        dataLayer.push({
          event: 'purchase',
          ecommerce: {
            purchase: {
              actionField: {
                id: action.order._id,
                affiliation: 'Online Store',
                revenue: action.order.itemsPrice,

                currency: 'USD',
                tax: action.order.taxPrice,
                shipping: action.order.shippingPrice,
              },
              products: action.order.orderItems.map((item: CartItem) =>
                gtmService.mapCartItemToGtm(item)
              ),
            },
          },
        });
        break;

      case orderDeliverSuccess.type:
        dataLayer.push({ ecommerce: null });
        dataLayer.push({
          ecommerce: {
            order_delivered: {
              actionField: { id: action.order._id }, // Transaction ID. Required for purchases and refunds.
            },
          },
        });
        break;

      case orderRefundSuccess.type:
        dataLayer.push({ ecommerce: null });
        dataLayer.push({
          ecommerce: {
            refund: {
              actionField: { id: action.order._id }, // Transaction ID. Required for purchases and refunds.
            },
          },
        });

        break;

      default:
        break;
    }

    return reducer(state, action);
  };
