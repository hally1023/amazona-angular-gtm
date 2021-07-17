import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import {
  cartAddItem,
  cartAddItemFailure,
  cartAddItemSuccess,
} from '../actions/cart/cart.actions';
import { ProductsService } from '../services/products.service';

@Injectable()
export class CartEffects {
  addToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartAddItem),
      exhaustMap((action) =>
        this.productService.getProductDetails(action.productId).pipe(
          map((product) =>
            cartAddItemSuccess({
              item: {
                name: product.name,
                product: product._id,
                image: product.image,
                price: product.price,
                countInStock: product.countInStock,
                qty: action.qty,
              },
            })
          ),
          catchError((error) => of(cartAddItemFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}
}
