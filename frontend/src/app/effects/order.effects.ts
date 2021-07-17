import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import {
  orderCreate,
  orderCreateFailure,
  orderCreateSuccess,
} from '../actions/order/create.actions';
import {
  orderDelete,
  orderDeleteFailure,
  orderDeleteSuccess,
} from '../actions/order/delete.actions';
import {
  orderDeliver,
  orderDeliverFailure,
  orderDeliverSuccess,
} from '../actions/order/deliver.actions';
import {
  orderDetails,
  orderDetailsFailure,
  orderDetailsSuccess,
} from '../actions/order/details.actions';
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

  deleteOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(orderDelete),
      exhaustMap((action) =>
        this.orderService.deleteOrder(action.orderId).pipe(
          map(() => orderDeleteSuccess()),
          catchError((error) => of(orderDeleteFailure({ error })))
        )
      )
    )
  );

  deliverOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(orderDeliver),
      exhaustMap((action) =>
        this.orderService.deliverOrder(action.orderId).pipe(
          map(() => orderDeliverSuccess()),
          catchError((error) => of(orderDeliverFailure({ error })))
        )
      )
    )
  );

  detailsOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(orderDetails),
      exhaustMap((action) =>
        this.orderService.detailsOrder(action.orderId).pipe(
          map((order) => orderDetailsSuccess({ order })),
          catchError((error) => of(orderDetailsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private orderService: OrderService) {}
}
