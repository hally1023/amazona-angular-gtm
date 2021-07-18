import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { cartSavePaymentMethod } from 'src/app/actions/cart/cart.actions';
import { PaymentMethod } from 'src/app/models/payment-method.model';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
})
export class PaymentMethodComponent implements OnInit {
  paymentMethod: PaymentMethod = 'PayPal';

  submitHandler() {
    this.store.dispatch(
      cartSavePaymentMethod({ paymentMethod: this.paymentMethod })
    );

    this.router.navigate(['/placeorder']);
  }

  constructor(private router: Router, private store: Store<State>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.cart.shippingAddress)
      .subscribe((shippingAddress) => {
        if (!shippingAddress) {
          this.router.navigate(['/shipping']);
        }
      });
  }
}
