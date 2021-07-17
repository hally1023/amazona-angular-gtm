import { createAction, props } from '@ngrx/store';

export const orderDetails = createAction('[Details] Order Details');

export const orderDetailsSuccess = createAction(
  '[Details] Order Details Success',
  props<{ data: any }>()
);

export const orderDetailsFailure = createAction(
  '[Details] Order Details Failure',
  props<{ error: any }>()
);
