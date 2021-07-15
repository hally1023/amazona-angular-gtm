import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from 'src/app/reducers';

export const selectProducts = createSelector(
  (state: State) => state.productList.products,
  (products) => products
);
