import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import {
  orderCreate,
  orderCreateFailure,
  orderCreateSuccess,
} from '../actions/order/create.actions';
import { OrderService } from '../services/order.service';

@Injectable()
export class OrderEffects {
  createOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(orderCreate),
      exhaustMap((action) =>
        this.orderService.createOrder(action.order).pipe(
          map(({ order }) => orderCreateSuccess({ data: order })),
          catchError((error) => of(orderCreateFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private orderService: OrderService) {}
}
