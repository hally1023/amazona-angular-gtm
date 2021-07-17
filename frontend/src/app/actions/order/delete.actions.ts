import { createAction, props } from '@ngrx/store';

export const orderDelete = createAction('[Delete] Order Delete');

export const orderDeleteSuccess = createAction(
  '[Delete] Order Delete Success',
  props<{ data: any }>()
);

export const orderDeleteFailure = createAction(
  '[Delete] Order Delete Failure',
  props<{ error: any }>()
);
