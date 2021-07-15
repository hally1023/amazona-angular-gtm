import { createAction, props } from '@ngrx/store';

export const CreateProducts = createAction('[CreateProduct] Create Products');

export const CreateProductsSuccess = createAction(
  '[CreateProduct] Create Products Success',
  props<{ data: any }>()
);

export const CreateProductsFailure = createAction(
  '[CreateProduct] Create Products Failure',
  props<{ error: any }>()
);
