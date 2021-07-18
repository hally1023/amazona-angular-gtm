import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export interface CreateProductPayload {
  name: string;
  category: string;
  image: string;
  price: number;
  countInStock: number;
  brand: string;
  rating: number;
  numReviews: number;
  description: string;
}

export const createProduct = createAction(
  '[CreateProduct] Create Product',
  props<{ product: CreateProductPayload }>()
);

export const createProductSuccess = createAction(
  '[CreateProduct] Create Product Success',
  props<{ data: Product }>()
);

export const createProductFailure = createAction(
  '[CreateProduct] Create Product Failure',
  props<{ error: any }>()
);

export const createProductReset = createAction(
  '[CreateProduct] Create Product Reset',
  props<{ error: any }>()
);
