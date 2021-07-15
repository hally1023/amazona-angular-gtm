import { createAction, props } from '@ngrx/store';

export const DeleteProducts = createAction('[DeleteProduct] Delete Products');

export const DeleteProductsSuccess = createAction(
  '[DeleteProduct] Delete Products Success',
  props<{ data: any }>()
);

export const DeleteProductsFailure = createAction(
  '[DeleteProduct] Delete Products Failure',
  props<{ error: any }>()
);
