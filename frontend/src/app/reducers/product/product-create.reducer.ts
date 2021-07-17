import { Action, createReducer, on } from '@ngrx/store';
import {
  createProduct,
  createProductFailure,
  createProductSuccess,
} from 'src/app/actions/product/create-product.actions';
import { Product } from 'src/app/models/product.model';

export const productCreateFeatureKey = 'productCreate';

export interface State {
  loading?: boolean;
  error?: any;
  product?: Product;
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(createProduct, (_) => ({ loading: true })),
  on(createProductSuccess, (_, { data }) => ({
    loading: false,
    success: true,
    product: data,
  })),
  on(createProductFailure, (_, { error }) => ({ loading: false, error }))
);
