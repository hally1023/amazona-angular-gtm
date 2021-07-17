import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/models/order.model';

export interface PaymentResultPayload {
  id: string;
  status: string;
  update_time: string;
  email_address?: any;
}

export const orderPay = createAction(
  '[Pay] Order Pay',
  props<{ paymentResult: PaymentResultPayload; orderId: string }>()
);

export const orderPaySuccess = createAction('[Pay] Order Pay Success');

export const orderPayFailure = createAction(
  '[Pay] Order Pay Failure',
  props<{ error: any }>()
);
