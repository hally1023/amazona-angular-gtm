import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartItem } from './models/cart-item.model';
import { UserDetails } from './models/user-details.model';
import { State } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';

  userInfo: UserDetails | undefined;
  cartItems: CartItem[] = [];

  cart$ = this.store
    .select((state) => state.cart)
    .subscribe((cart) => {
      this.cartItems = cart.cartItems;
    });

  userSignIn$ = this.store
    .select((state) => state.userSignIn)
    .subscribe((userSignIn) => {
      this.userInfo = userSignIn.userInfo;
    });

  constructor(private store: Store<State>) {}
}
