import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from 'src/app/services/products.service';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  listProducts,
  listProductsFailure,
  listProductsSuccess,
} from 'src/app/actions/product/list-product.actions';
import {
  detailsProduct,
  detailsProductFailure,
  detailsProductSuccess,
} from 'src/app/actions/product/details-product.actions';
import {
  deleteProduct,
  deleteProductFailure,
  deleteProductSuccess,
} from '../actions/product/delete-product.actions';
import {
  updateProduct,
  updateProductFailure,
  updateProductSuccess,
} from '../actions/product/update-product.actions';
import {
  createProduct,
  createProductFailure,
  createProductSuccess,
} from '../actions/product/create-product.actions';
import { Router } from '@angular/router';

@Injectable()
export class ProductEffects {
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

  detailsProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(detailsProduct),
      exhaustMap((action) =>
        this.productService.getProductDetails(action.productId).pipe(
          map((product) => detailsProductSuccess({ data: product })),
          catchError((error) => of(detailsProductFailure({ error })))
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProduct),
      exhaustMap((action) =>
        this.productService.deleteProduct(action.productId).pipe(
          map(() => deleteProductSuccess()),
          catchError((error) => of(deleteProductFailure({ error })))
        )
      )
    )
  );

  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProduct),
      exhaustMap((action) =>
        this.productService.updateProduct(action.product).pipe(
          map((product) => updateProductSuccess({ data: product })),
          catchError((error) => of(updateProductFailure({ error })))
        )
      )
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProduct),
      exhaustMap(() =>
        this.productService.createProduct().pipe(
          map((data) => createProductSuccess({ data: data.product })),
          catchError((error) => of(createProductFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductsService,
    private router: Router
  ) {}
}
