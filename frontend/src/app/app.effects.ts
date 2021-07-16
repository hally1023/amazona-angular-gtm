import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  listProducts,
  listProductsFailure,
  listProductsSuccess,
} from './actions/product/list-product.actions';
import { ProductsService } from './services/products.service';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  detailsProducts,
  detailsProductsFailure,
  detailsProductsSuccess,
} from './actions/product/details-product.actions';

@Injectable()
export class AppEffects {
  listProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listProducts),
      exhaustMap((action) =>
        this.productService.getProducts().pipe(
          map((products) => listProductsSuccess({ data: products })),
          catchError((error) => of(listProductsFailure({ error })))
        )
      )
    )
  );

  detailsProduct = createEffect(() =>
    this.actions$.pipe(
      ofType(detailsProducts),
      exhaustMap((action) =>
        this.productService.getProductDetails(action.productId).pipe(
          map((product) => detailsProductsSuccess({ data: product })),
          catchError((error) => of(detailsProductsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}
}
