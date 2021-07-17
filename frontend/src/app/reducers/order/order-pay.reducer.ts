import { Action, createReducer, on } from '@ngrx/store';
import {
  orderPay,
  orderPayFailure,
  orderPaySuccess,
} from 'src/app/actions/order/pay.actions';

export const orderPayFeatureKey = 'orderPay';

export interface State {
  loading?: boolean;
  error?: any;
  success?: boolean;
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(orderPay, (_) => ({ loading: true })),
  on(orderPaySuccess, (state) => ({
    loading: false,
    success: true,
  })),
  on(orderPayFailure, (_, { error }) => ({ loading: false, error }))
);
