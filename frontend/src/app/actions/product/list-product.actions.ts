import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export const listProducts = createAction('[ListProduct] List Products');

export const listProductsSuccess = createAction(
  '[ListProduct] List Products Success',
  props<{ data: Product[] }>()
);

export const listProductsFailure = createAction(
  '[ListProduct] List Products Failure',
  props<{ error: any }>()
);
