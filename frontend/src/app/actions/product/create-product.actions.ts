import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export const createProduct = createAction('[CreateProduct] Create Product');

export const createProductSuccess = createAction(
  '[CreateProduct] Create Product Success',
  props<{ data: Product }>()
);

export const createProductFailure = createAction(
  '[CreateProduct] Create Product Failure',
  props<{ error: any }>()
);

export const createProductReset = createAction(
  '[CreateProduct] Create Product Reset'
);
