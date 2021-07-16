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

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}
}
