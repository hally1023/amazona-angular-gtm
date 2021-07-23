import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/models/order.model';

export const orderDeliver = createAction(
  '[Deliver] Order Deliver',
  props<{ orderId: string }>()
);

export const orderDeliverSuccess = createAction(
  '[Deliver] Order Deliver Success',
  props<{ order: Order }>()
);

export const orderDeliverFailure = createAction(
  '[Deliver] Order Deliver Failure',
  props<{ error: any }>()
);

export const orderDeliverReset = createAction('[Deliver] Order Deliver Reset');
