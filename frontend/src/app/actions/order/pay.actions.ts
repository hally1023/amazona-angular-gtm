import { createAction, props } from '@ngrx/store';

export const orderPay = createAction('[Pay] Order Pay');

export const orderPaySuccess = createAction(
  '[Pay] Order Pay Success',
  props<{ data: any }>()
);

export const orderPayFailure = createAction(
  '[Pay] Order Pay Failure',
  props<{ error: any }>()
);
