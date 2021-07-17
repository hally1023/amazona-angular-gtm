import { Action, createReducer, on } from '@ngrx/store';
import {
  orderCreate,
  orderCreateFailure,
  orderCreateSuccess,
} from 'src/app/actions/order/create.actions';
import { Order } from 'src/app/models/order.model';

export const orderCreateFeatureKey = 'orderCreate';

export interface State {
  loading?: boolean;
  error?: any;
  order?: Order;
  success?: boolean;
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(orderCreate, (_) => ({ loading: true })),
  on(orderCreateSuccess, (state, { data }) => ({
    loading: false,
    success: true,
    order: data,
  })),
  on(orderCreateFailure, (_, { error }) => ({ loading: false, error }))
);
