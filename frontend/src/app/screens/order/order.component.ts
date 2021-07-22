import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  orderDeliver,
  orderDeliverReset,
} from 'src/app/actions/order/deliver.actions';
import { orderDetails } from 'src/app/actions/order/details.actions';
import {
  orderPay,
  orderPayReset,
  PaymentResultPayload,
} from 'src/app/actions/order/pay.actions';
import {
  orderRefund,
  orderRefundReset,
} from 'src/app/actions/order/refund.actions';
import { Order } from 'src/app/models/order.model';
import { UserDetails } from 'src/app/models/user-details.model';
import { State } from 'src/app/reducers';
import { PaypalService } from 'src/app/services/paypal.service';

declare var paypal: any;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @ViewChild('paypalRef', { static: true }) private paypalRef!: ElementRef;

  loading: boolean | undefined;
  error: any = null;
  order: Order | undefined;

  orderId: string | undefined;

  userInfo: UserDetails | undefined | null;

  loadingPay: boolean | undefined;
  errorPay: any = null;
  successPay: boolean | undefined;

  loadingDeliver: boolean | undefined;
  errorDeliver: any = null;
  successDeliver: boolean | undefined;

  successRefund: boolean | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    private router: Router,
    private paypalService: PaypalService
  ) {}

  createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: this.order?.totalPrice,
          },
        },
      ],
    });
  };

  successPaymentHandler = (paymentResult: PaymentResultPayload) => {
    this.store.dispatch(
      orderPay({ paymentResult: paymentResult, orderId: this.order?._id! })
    );

    this.router.navigate([`/order-complete/${this.orderId}`]);
  };

  deliverHandler = () => {
    this.store.dispatch(orderDeliver({ orderId: this.orderId! }));
    this.router.navigate([`/order-complete/${this.orderId}`]);
  };

  refundHandler = () => {
    this.store.dispatch(orderRefund({ orderId: this.orderId! }));
    this.router.navigate([`/refund-order/${this.orderId!}`]);
  };

  ngOnInit(): void {
    this.store
      .select((state) => state.orderPay)
      .subscribe((orderPay) => {
        this.loadingPay = orderPay.loading;
        this.errorPay = orderPay.error;
        this.successPay = orderPay.success;

        if (orderPay.success && this.orderId) {
          this.store.dispatch(orderPayReset());
          this.store.dispatch(orderDetails({ orderId: this.orderId }));
        }
      });

    this.store
      .select((state) => state.orderDeliver)
      .subscribe((orderDeliver) => {
        this.loadingDeliver = orderDeliver.loading;
        this.errorDeliver = orderDeliver.error;
        this.successDeliver = orderDeliver.success;

        if (orderDeliver.success && this.orderId) {
          this.store.dispatch(orderDeliverReset());
          this.store.dispatch(orderDetails({ orderId: this.orderId }));
        }
      });

    this.store
      .select((state) => state.orderRefund)
      .subscribe((orderRefund) => {
        this.successRefund = orderRefund.success;

        if (orderRefund.success && this.orderId) {
          this.store.dispatch(orderRefundReset());
          this.store.dispatch(orderDetails({ orderId: this.orderId }));
        }
      });

    this.route.params.subscribe((params) => {
      const orderId = params.id;
      this.orderId = orderId;
      if (orderId) {
        this.store.dispatch(orderDetails({ orderId }));

        if (this.order && !this.order.isPaid)
          this.paypalService.fetchPaypalClientId().subscribe((clientId) => {
            this.paypalService.initiate(clientId).subscribe(() => {
              console.log(paypal);
              paypal
                .Buttons({
                  createOrder: this.createOrder,
                  onApprove: async (data: any, actions: any) => {
                    const order = await actions.order.capture();

                    this.successPaymentHandler(order);
                  },
                })
                .render(this.paypalRef.nativeElement);
            });
          });
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

  ngOnDestroy() {
    this.paypalService.remove();
  }
}
