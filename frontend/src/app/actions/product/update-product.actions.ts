import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export const UpdateProducts = createAction('[UpdateProduct] Update Products');

export const UpdateProductsSuccess = createAction(
  '[UpdateProduct] Update Products Success',
  props<{ data: Partial<Product> }>()
);

export const UpdateProductsFailure = createAction(
  '[UpdateProduct] Update Products Failure',
  props<{ error: any }>()
);
