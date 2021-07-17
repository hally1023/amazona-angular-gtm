import { createAction, props } from '@ngrx/store';

export const orderDeliver = createAction('[Deliver] Order Deliver');

export const orderDeliverSuccess = createAction(
  '[Deliver] Order Deliver Success',
  props<{ data: any }>()
);

export const orderDeliverFailure = createAction(
  '[Deliver] Order Deliver Failure',
  props<{ error: any }>()
);
