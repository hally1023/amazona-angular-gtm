import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from 'src/app/services/products.service';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  listProducts,
  listProductsFailure,
  listProductsSuccess,
} from 'src/app/actions/product/list-product.actions';
import {
  detailsProducts,
  detailsProductsFailure,
  detailsProductsSuccess,
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
      ofType(detailsProducts),
      exhaustMap((action) =>
        this.productService.getProductDetails(action.productId).pipe(
          map((product) => detailsProductsSuccess({ data: product })),
          catchError((error) => of(detailsProductsFailure({ error })))
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
      exhaustMap((action) =>
        this.productService.createProduct(action.product).pipe(
          map((product) => createProductSuccess({ data: product })),
          catchError((error) => of(createProductFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}
}
