import { Action, createReducer, on } from '@ngrx/store';
import {
  orderList,
  orderListFailure,
  orderListSuccess,
} from 'src/app/actions/order/list.actions';
import { Order } from 'src/app/models/order.model';

export const orderListFeatureKey = 'orderList';

export interface State {
  loading?: boolean;
  error?: any;
  orders?: Order[];
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(orderList, (_) => ({ loading: true })),
  on(orderListSuccess, (_, { data }) => ({
    loading: false,
    orders: data,
  })),
  on(orderListFailure, (_, { error }) => ({ loading: false, error }))
);
