import { Action, createReducer, on } from '@ngrx/store';
import {
  orderRefund,
  orderRefundFailure,
  orderRefundReset,
  orderRefundSuccess,
} from 'src/app/actions/order/refund.actions';

export const orderRefundFeatureKey = 'orderRefund';

export interface State {
  loading?: boolean;
  error?: any;
  success?: boolean;
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(orderRefund, (_) => ({ loading: true })),
  on(orderRefundSuccess, (state) => ({
    loading: false,
    success: true,
  })),
  on(orderRefundFailure, (_, { error }) => ({ loading: false, error })),
  on(orderRefundReset, (_) => ({}))
);
