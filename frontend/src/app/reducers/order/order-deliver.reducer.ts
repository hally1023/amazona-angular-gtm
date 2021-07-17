import { Action, createReducer, on } from '@ngrx/store';
import {
  orderDeliver,
  orderDeliverFailure,
  orderDeliverSuccess,
} from 'src/app/actions/order/deliver.actions';

export const orderDeliverFeatureKey = 'orderDeliver';

export interface State {
  loading?: boolean;
  error?: any;
  success?: boolean;
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(orderDeliver, (_) => ({ loading: true })),
  on(orderDeliverSuccess, (state) => ({
    loading: false,
    success: true,
  })),
  on(orderDeliverFailure, (_, { error }) => ({ loading: false, error }))
);
