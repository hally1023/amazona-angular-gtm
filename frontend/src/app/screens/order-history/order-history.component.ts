import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { orderMineList } from 'src/app/actions/order/mine-list.actions';
import { Order } from 'src/app/models/order.model';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent implements OnInit {
  loading: boolean | undefined;
  error: any;
  orders: Order[] = [];

  detailsHandler = (orderId: string) => {
    this.router.navigate([`/order/${orderId}`]);
  };

  constructor(private router: Router, private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(orderMineList());

    this.store
      .select((state) => state.orderMineList)
      .subscribe((orderMineList) => {
        this.loading = orderMineList.loading;
        this.error = orderMineList.error;
        this.orders = orderMineList.orders!;
      });
  }
}
