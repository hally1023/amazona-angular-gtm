import { createAction, props } from '@ngrx/store';

export const orderList = createAction('[List] Order List');

export const orderListSuccess = createAction(
  '[List] Order List Success',
  props<{ data: any }>()
);

export const orderListFailure = createAction(
  '[List] Order List Failure',
  props<{ error: any }>()
);
