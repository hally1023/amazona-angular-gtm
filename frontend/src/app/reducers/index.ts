import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCart from './cart/cart.reducer';
import * as fromProductList from './product-list/product-list.reducer';

export interface State {
  [fromCart.cartFeatureKey]: fromCart.State;
  [fromProductList.productListFeatureKey]: fromProductList.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromCart.cartFeatureKey]: fromCart.reducer,
  [fromProductList.productListFeatureKey]: fromProductList.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
