import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export const updateProduct = createAction(
  '[UpdateProduct] Update Product',
  props<{ product: Partial<Product> }>()
);

export const updateProductSuccess = createAction(
  '[UpdateProduct] Update Product Success',
  props<{ data: Product }>()
);

export const updateProductFailure = createAction(
  '[UpdateProduct] Update Product Failure',
  props<{ error: any }>()
);

export const updateProductReset = createAction(
  '[UpdateProduct] Update Product Reset',
  props<{ error: any }>()
);
