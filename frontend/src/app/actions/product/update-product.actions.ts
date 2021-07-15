import { createAction, props } from '@ngrx/store';

export const UpdateProducts = createAction('[UpdateProduct] Update Products');

export const UpdateProductsSuccess = createAction(
  '[UpdateProduct] Update Products Success',
  props<{ data: any }>()
);

export const UpdateProductsFailure = createAction(
  '[UpdateProduct] Update Products Failure',
  props<{ error: any }>()
);
