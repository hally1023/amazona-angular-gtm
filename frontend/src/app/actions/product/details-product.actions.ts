import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export const detailsProduct = createAction(
  '[DetailsProduct] Details Product',
  props<{ productId: string }>()
);

export const detailsProductSuccess = createAction(
  '[DetailsProduct] Details Product Success',
  props<{ data: Product }>()
);

export const detailsProductFailure = createAction(
  '[DetailsProduct] Details Product Failure',
  props<{ error: any }>()
);
