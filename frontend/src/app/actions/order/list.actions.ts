import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/models/order.model';

export const orderList = createAction('[List] Order List');

export const orderListSuccess = createAction(
  '[List] Order List Success',
  props<{ data: Order[] }>()
);

export const orderListFailure = createAction(
  '[List] Order List Failure',
  props<{ error: any }>()
);
