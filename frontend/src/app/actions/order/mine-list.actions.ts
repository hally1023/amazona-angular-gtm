import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/models/order.model';

export const orderMineList = createAction('[MineList] Order MineList');

export const orderMineListSuccess = createAction(
  '[MineList] Order MineList Success',
  props<{ data: Order[] }>()
);

export const orderMineListFailure = createAction(
  '[MineList] Order MineList Failure',
  props<{ error: any }>()
);
