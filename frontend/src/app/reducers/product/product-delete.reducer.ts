import { Action, createReducer, on } from '@ngrx/store';
import {
  deleteProduct,
  deleteProductFailure,
  deleteProductSuccess,
} from 'src/app/actions/product/delete-product.actions';

export const productDeleteFeatureKey = 'productDelete';

export interface State {
  loading?: boolean;
  error?: any;
  success?: boolean;
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(deleteProduct, (_) => ({ loading: true })),
  on(deleteProductSuccess, (_) => ({ loading: false, success: true })),
  on(deleteProductFailure, (_, { error }) => ({ loading: false, error }))
);
