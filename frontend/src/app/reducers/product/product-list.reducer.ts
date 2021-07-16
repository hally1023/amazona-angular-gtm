import { Action, createReducer, on } from '@ngrx/store';
import {
  listProducts,
  listProductsFailure,
  listProductsSuccess,
} from 'src/app/actions/product/list-product.actions';
import { Product } from 'src/app/models/product.model';

export const productListFeatureKey = 'productList';

export interface State {
  loading?: boolean;
  products?: Product[];
  error?: string;
}

export const initialState: State = {
  loading: true,
  products: [],
};

export const reducer = createReducer(
  initialState,
  on(listProducts, (state, {}) => ({ loading: true })),
  on(listProductsSuccess, (state, { data }) => ({
    loading: false,
    products: data,
  })),
  on(listProductsFailure, (state, { error }) => ({ loading: false, error }))
);
