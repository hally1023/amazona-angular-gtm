import { Action, createReducer, on } from '@ngrx/store';
import {
  orderDetails,
  orderDetailsFailure,
  orderDetailsSuccess,
} from 'src/app/actions/order/details.actions';
import { Order } from 'src/app/models/order.model';

export const orderDetailsFeatureKey = 'orderDetails';

export interface State {
  loading?: boolean;
  error?: any;
  order?: Order;
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(orderDetails, (_) => ({ loading: true })),
  on(orderDetailsSuccess, (_, { order }) => ({
    loading: false,
    order,
  })),
  on(orderDetailsFailure, (_, { error }) => ({ loading: false, error }))
);
