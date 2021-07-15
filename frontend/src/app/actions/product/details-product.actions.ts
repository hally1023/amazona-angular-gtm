import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export const DetailsProducts = createAction(
  '[DetailsProduct] Details Products'
);

export const DetailsProductsSuccess = createAction(
  '[DetailsProduct] Details Products Success',
  props<{ data: Product }>()
);

export const DetailsProductsFailure = createAction(
  '[DetailsProduct] Details Products Failure',
  props<{ error: any }>()
);
