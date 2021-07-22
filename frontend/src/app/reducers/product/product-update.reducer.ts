import { Action, createReducer, on } from '@ngrx/store';
import {
  updateProduct,
  updateProductFailure,
  updateProductSuccess,
} from 'src/app/actions/product/update-product.actions';

export const productUpdateFeatureKey = 'productUpdate';

export interface State {
  loading?: boolean;
  error?: any;
  success?: boolean;
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(updateProduct, (_) => ({ loading: true })),
  on(updateProductSuccess, (_) => ({ loading: false, success: true })),
  on(updateProductFailure, (_, { error }) => ({ loading: false, error }))
);
