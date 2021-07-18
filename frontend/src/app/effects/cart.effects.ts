import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import {
  cartAddItem,
  cartAddItemFailure,
  cartAddItemSuccess,
  cartRemoveItem,
  cartSaveShippingAddress,
} from '../actions/cart/cart.actions';
import { State } from '../reducers';
import { LocalStorageService } from '../services/local-storage.service';
import { ProductsService } from '../services/products.service';

@Injectable()
export class CartEffects {
  addToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartAddItem),
      concatLatestFrom(() =>
        this.store.select((state) => state.cart.cartItems)
      ),
      exhaustMap(([action, cartItems]) =>
        this.productService.getProductDetails(action.productId).pipe(
          map((product) => {
            return cartAddItemSuccess({
              item: {
                name: product.name,
                product: product._id,
                image: product.image,
                price: product.price,
                countInStock: product.countInStock,
                qty: action.qty,
              },
            });
          }),
          tap(({ item }) => {
            const existItem = cartItems.find((x) => x.product === item.product);
            if (existItem) {
              this.localStorageService.setCartItems(
                cartItems.map((x) =>
                  x.product === existItem.product ? item : x
                )
              );
            } else {
              this.localStorageService.setCartItems([...cartItems, item]);
            }
          }),
          catchError((error) => of(cartAddItemFailure({ error })))
        )
      )
    )
  );

  removeFromCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartRemoveItem),
        concatLatestFrom(() =>
          this.store.select((state) => state.cart.cartItems)
        ),
        tap(([{ productId }, cartItems]) => {
          this.localStorageService.setCartItems(
            cartItems.filter((x) => x.product !== productId)
          );
        })
      ),
    { dispatch: false }
  );

  saveShippingAddress$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartSaveShippingAddress),
        tap(({ shippingAddress }) => {
          this.localStorageService.setShippingAddress(shippingAddress);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private productService: ProductsService,
    private store: Store<State>,
    private localStorageService: LocalStorageService
  ) {}
}
