import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCart from './cart/cart.reducer';
import * as fromProductList from './product/product-list.reducer';
import * as fromProductDetails from './product/product-details.reducer';
import * as fromUserSignIn from './user/user-auth.reducer';
import * as fromUserUpdateProfile from './user/user-update-profile.reducer';
import * as fromUserDetails from './user/user-details.reducer';
import * as fromProductCreate from './product/product-create.reducer';
import * as fromProductUpdate from './product/product-update.reducer';
import * as fromProductDelete from './product/product-delete.reducer';
import * as fromOrderCreate from './order/order-create.reducer';
import * as fromOrderDetails from './order/order-details.reducer';
import * as fromOrderPay from './order/order-pay.reducer';
import * as fromOrderMineList from './order/order-mine-list.reducer';
import * as fromOrderList from './order/order-list.reducer';
import * as fromOrderDelete from './order/order-delete.reducer';
import * as fromOrderDeliver from './order/order-deliver.reducer';
import * as fromOrderRefund from './order/order-refund.reducer';
import { gtag } from './meta/gtag.meta-reducer';

export interface State {
  [fromCart.cartFeatureKey]: fromCart.State;
  [fromProductList.productListFeatureKey]: fromProductList.State;
  [fromProductDetails.productDetailsFeatureKey]: fromProductDetails.State;
  [fromUserSignIn.userAuthFeatureKey]: fromUserSignIn.State;
  [fromUserUpdateProfile.userUpdateProfileFeatureKey]: fromUserUpdateProfile.State;
  [fromUserDetails.userDetailsFeatureKey]: fromUserDetails.State;
  [fromProductCreate.productCreateFeatureKey]: fromProductCreate.State;
  [fromProductUpdate.productUpdateFeatureKey]: fromProductUpdate.State;
  [fromProductDelete.productDeleteFeatureKey]: fromProductDelete.State;
  [fromOrderCreate.orderCreateFeatureKey]: fromOrderCreate.State;
  [fromOrderDetails.orderDetailsFeatureKey]: fromOrderDetails.State;
  [fromOrderPay.orderPayFeatureKey]: fromOrderPay.State;
  [fromOrderMineList.orderMineListFeatureKey]: fromOrderMineList.State;
  [fromOrderList.orderListFeatureKey]: fromOrderList.State;
  [fromOrderDelete.orderDeleteFeatureKey]: fromOrderDelete.State;
  [fromOrderDeliver.orderDeliverFeatureKey]: fromOrderDeliver.State;
  [fromOrderRefund.orderRefundFeatureKey]: fromOrderRefund.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromCart.cartFeatureKey]: fromCart.reducer,
  [fromProductList.productListFeatureKey]: fromProductList.reducer,
  [fromProductDetails.productDetailsFeatureKey]: fromProductDetails.reducer,
  [fromUserSignIn.userAuthFeatureKey]: fromUserSignIn.reducer,
  [fromUserUpdateProfile.userUpdateProfileFeatureKey]:
    fromUserUpdateProfile.reducer,
  [fromUserDetails.userDetailsFeatureKey]: fromUserDetails.reducer,
  [fromProductCreate.productCreateFeatureKey]: fromProductCreate.reducer,
  [fromProductUpdate.productUpdateFeatureKey]: fromProductUpdate.reducer,
  [fromProductDelete.productDeleteFeatureKey]: fromProductDelete.reducer,
  [fromOrderCreate.orderCreateFeatureKey]: fromOrderCreate.reducer,
  [fromOrderDetails.orderDetailsFeatureKey]: fromOrderDetails.reducer,
  [fromOrderPay.orderPayFeatureKey]: fromOrderPay.reducer,
  [fromOrderMineList.orderMineListFeatureKey]: fromOrderMineList.reducer,
  [fromOrderList.orderListFeatureKey]: fromOrderList.reducer,
  [fromOrderDelete.orderDeleteFeatureKey]: fromOrderDelete.reducer,
  [fromOrderDeliver.orderDeliverFeatureKey]: fromOrderDeliver.reducer,
  [fromOrderRefund.orderRefundFeatureKey]: fromOrderRefund.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [gtag]
  : [gtag];

export const selectProductList = createSelector(
  (state: State) => state.productList,
  (productList) => productList.products
);
