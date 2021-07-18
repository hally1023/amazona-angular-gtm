import { createAction, props } from '@ngrx/store';

export const orderRefund = createAction(
  '[Refund] Order Refund',
  props<{ orderId: string }>()
);

export const orderRefundSuccess = createAction('[Refund] Order Refund Success');

export const orderRefundFailure = createAction(
  '[Refund] Order Refund Failure',
  props<{ error: any }>()
);

export const orderRefundReset = createAction(
  '[Refund] Order Refund Reset',
  props<{ error: any }>()
);
