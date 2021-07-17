import { createAction, props } from '@ngrx/store';

export const orderDelete = createAction(
  '[Delete] Order Delete',
  props<{ orderId: string }>()
);

export const orderDeleteSuccess = createAction('[Delete] Order Delete Success');

export const orderDeleteFailure = createAction(
  '[Delete] Order Delete Failure',
  props<{ error: any }>()
);
