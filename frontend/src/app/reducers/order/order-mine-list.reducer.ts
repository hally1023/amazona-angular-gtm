import { Action, createReducer, on } from '@ngrx/store';
import {
  orderMineList,
  orderMineListFailure,
  orderMineListSuccess,
} from 'src/app/actions/order/mine-list.actions';
import { Order } from 'src/app/models/order.model';

export const orderMineListFeatureKey = 'orderMineList';

export interface State {
  loading?: boolean;
  error?: any;
  orders?: Order[];
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(orderMineList, (_) => ({ loading: true })),
  on(orderMineListSuccess, (_, { data }) => ({
    loading: false,
    orders: data,
  })),
  on(orderMineListFailure, (_, { error }) => ({ loading: false, error }))
);
