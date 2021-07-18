import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  orderDelete,
  orderDeleteReset,
} from 'src/app/actions/order/delete.actions';
import { orderList } from 'src/app/actions/order/list.actions';
import { Order } from 'src/app/models/order.model';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  loading: boolean | undefined;
  error: any;
  orders: Order[] = [];

  loadingDelete: boolean | undefined;
  errorDelete: any;
  successDelete: boolean | undefined;

  detailsHandler = (orderId: string) => {
    this.router.navigate([`/order/${orderId}`]);
  };

  deleteHandler = (order: Order) => {
    if (window.confirm('Are you sure to delete?')) {
      this.store.dispatch(orderDelete({ orderId: order._id }));
    }
  };

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(orderList());

    this.store
      .select((state) => state.orderDelete)
      .subscribe((orderDelete) => {
        this.errorDelete = orderDelete.error;
        this.successDelete = orderDelete.success;
        this.loadingDelete = orderDelete.loading;

        if (orderDelete.success) {
          this.store.dispatch(orderDeleteReset());
          this.store.dispatch(orderList());
        }
      });

    this.store
      .select((state) => state.orderList)
      .subscribe((orderList) => {
        this.loading = orderList.loading;
        this.error = orderList.error;
        this.orders = orderList.orders!;
      });
  }
}
