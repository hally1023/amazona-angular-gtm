import { createAction, props } from '@ngrx/store';

export const orderMineList = createAction('[MineList] Order MineList');

export const orderMineListSuccess = createAction(
  '[MineList] Order MineList Success',
  props<{ data: any }>()
);

export const orderMineListFailure = createAction(
  '[MineList] Order MineList Failure',
  props<{ error: any }>()
);
