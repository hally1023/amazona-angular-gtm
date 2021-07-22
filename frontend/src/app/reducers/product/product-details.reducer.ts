import { Action, createReducer, on } from '@ngrx/store';
import {
  detailsProduct,
  detailsProductFailure,
  detailsProductSuccess,
} from 'src/app/actions/product/details-product.actions';
import { Product } from 'src/app/models/product.model';

export const productDetailsFeatureKey = 'productDetails';

export interface State {
  loading?: boolean;
  product?: Product;
  error?: string;
}

export const initialState: State = {
  loading: true,
};

export const reducer = createReducer(
  initialState,
  on(detailsProduct, (state, {}) => ({ loading: true })),
  on(detailsProductSuccess, (state, { data }) => ({
    loading: false,
    product: data,
  })),
  on(detailsProductFailure, (state, { error }) => ({ loading: false, error }))
);
