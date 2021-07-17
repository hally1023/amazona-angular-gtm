import { Action, createReducer, on } from '@ngrx/store';
import {
  orderDelete,
  orderDeleteFailure,
  orderDeleteSuccess,
} from 'src/app/actions/order/delete.actions';

export const orderDeleteFeatureKey = 'orderDelete';

export interface State {
  loading?: boolean;
  error?: any;
  success?: boolean;
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(orderDelete, (_) => ({ loading: true })),
  on(orderDeleteSuccess, (state) => ({
    loading: false,
    success: true,
  })),
  on(orderDeleteFailure, (_, { error }) => ({ loading: false, error }))
);
