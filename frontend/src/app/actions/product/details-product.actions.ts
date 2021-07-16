import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export const detailsProducts = createAction(
  '[DetailsProduct] Details Products',
  props<{ productId: string }>()
);

export const detailsProductsSuccess = createAction(
  '[DetailsProduct] Details Products Success',
  props<{ data: Product }>()
);

export const detailsProductsFailure = createAction(
  '[DetailsProduct] Details Products Failure',
  props<{ error: any }>()
);
