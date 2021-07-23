import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/models/order.model';

export const orderRefund = createAction(
  '[Refund] Order Refund',
  props<{ orderId: string }>()
);

export const orderRefundSuccess = createAction(
  '[Refund] Order Refund Success',
  props<{ order: Order }>()
);

export const orderRefundFailure = createAction(
  '[Refund] Order Refund Failure',
  props<{ error: any }>()
);

export const orderRefundReset = createAction('[Refund] Order Refund Reset');
