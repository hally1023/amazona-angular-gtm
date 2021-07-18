import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { orderDetails } from 'src/app/actions/order/details.actions';
import { Order } from 'src/app/models/order.model';
import { UserDetails } from 'src/app/models/user-details.model';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  loading: boolean | undefined;
  error: any;
  order: Order | undefined;
  userInfo: UserDetails | undefined | null;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const orderId = params.id;
      if (orderId) {
        this.store.dispatch(orderDetails({ orderId }));
      }
    });

    this.store
      .select((state) => state.orderDetails)
      .subscribe((orderDetails) => {
        this.error = orderDetails.error;
        this.loading = orderDetails.loading;
        this.order = orderDetails.order;
      });

    this.store
      .select((state) => state.userAuth.userInfo)
      .subscribe((userInfo) => {
        this.userInfo = userInfo;
      });
  }
}
