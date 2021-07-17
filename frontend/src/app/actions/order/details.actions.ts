import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/models/order.model';

export const orderDetails = createAction(
  '[Details] Order Details',
  props<{ orderId: string }>()
);

export const orderDetailsSuccess = createAction(
  '[Details] Order Details Success',
  props<{ order: Order }>()
);

export const orderDetailsFailure = createAction(
  '[Details] Order Details Failure',
  props<{ error: any }>()
);
