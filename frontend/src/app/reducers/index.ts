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
import * as fromUserSignIn from './user/user-sign-in.reducer';
import * as fromUserRegister from './user/user-register.reducer';
import * as fromUserUpdateProfile from './user/user-update-profile.reducer';
import * as fromUserDetails from './user/user-details.reducer';

export interface State {
  [fromCart.cartFeatureKey]: fromCart.State;
  [fromProductList.productListFeatureKey]: fromProductList.State;
  [fromProductDetails.productDetailsFeatureKey]: fromProductDetails.State;
  [fromUserSignIn.userSignInFeatureKey]: fromUserSignIn.State;
  [fromUserRegister.userRegisterFeatureKey]: fromUserRegister.State;
  [fromUserUpdateProfile.userUpdateProfileFeatureKey]: fromUserUpdateProfile.State;
  [fromUserDetails.userDetailsFeatureKey]: fromUserDetails.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromCart.cartFeatureKey]: fromCart.reducer,
  [fromProductList.productListFeatureKey]: fromProductList.reducer,
  [fromProductDetails.productDetailsFeatureKey]: fromProductDetails.reducer,
  [fromUserSignIn.userSignInFeatureKey]: fromUserSignIn.reducer,
  [fromUserRegister.userRegisterFeatureKey]: fromUserRegister.reducer,
  [fromUserUpdateProfile.userUpdateProfileFeatureKey]:
    fromUserUpdateProfile.reducer,
  [fromUserDetails.userDetailsFeatureKey]: fromUserDetails.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const selectProductList = createSelector(
  (state: State) => state.productList,
  (productList) => productList.products
);
