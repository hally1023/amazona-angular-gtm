import { createAction, props } from '@ngrx/store';

export const deleteProduct = createAction(
  '[DeleteProduct] Delete Product',
  props<{ productId: string }>()
);

export const deleteProductSuccess = createAction(
  '[DeleteProduct] Delete Products Success'
);

export const deleteProductFailure = createAction(
  '[DeleteProduct] Delete Product Failure',
  props<{ error: any }>()
);

export const deleteProductReset = createAction(
  '[DeleteProduct] Delete Product Reset',
  props<{ error: any }>()
);
