import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { cartSaveShippingAddress } from 'src/app/actions/cart/cart.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss'],
})
export class ShippingAddressComponent implements OnInit {
  fullName = '';
  address = '';
  city = '';
  postalCode = '';
  country = '';

  submitHandler() {
    this.store.dispatch(
      cartSaveShippingAddress({
        shippingAddress: {
          address: this.address,
          city: this.city,
          country: this.country,
          fullName: this.fullName,
          postalCode: this.postalCode,
        },
      })
    );

    this.router.navigate(['/payment']);
  }

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.cart.shippingAddress)
      .subscribe((shippingAddress) => {
        if (shippingAddress) {
          this.address = shippingAddress.address;
          this.city = shippingAddress.city;
          this.country = shippingAddress.country;
          this.fullName = shippingAddress.fullName;
          this.postalCode = shippingAddress.postalCode;
        }
      });
  }
}
