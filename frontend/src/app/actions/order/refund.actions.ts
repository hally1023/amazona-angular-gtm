import { createAction, props } from '@ngrx/store';

export const orderRefund = createAction('[Refund] Order Refund');

export const orderRefundSuccess = createAction(
  '[Refund] Order Refund Success',
  props<{ data: any }>()
);

export const orderRefundFailure = createAction(
  '[Refund] Order Refund Failure',
  props<{ error: any }>()
);
