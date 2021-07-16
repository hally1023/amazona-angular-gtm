import { Action, createReducer, on } from '@ngrx/store';
import {
  detailsProducts,
  detailsProductsFailure,
  detailsProductsSuccess,
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
  on(detailsProducts, (state, {}) => ({ loading: true })),
  on(detailsProductsSuccess, (state, { data }) => ({
    loading: false,
    product: data,
  })),
  on(detailsProductsFailure, (state, { error }) => ({ loading: false, error }))
);
