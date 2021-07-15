import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export const loadListProducts = createAction('[ListProduct] List Products');

export const loadListProductsSuccess = createAction(
  '[ListProduct] List Products Success',
  props<{ data: Product[] }>()
);

export const loadListProductsFailure = createAction(
  '[ListProduct] List Products Failure',
  props<{ error: any }>()
);
