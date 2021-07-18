import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartEmpty } from './actions/cart/cart.actions';
import { userSignout } from './actions/user/signout.actions';
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

  userInfo: UserDetails | undefined | null;
  cartItems: CartItem[] = [];

  cart$ = this.store
    .select((state) => state.cart)
    .subscribe((cart) => {
      this.cartItems = cart.cartItems;
    });

  userAuth$ = this.store
    .select((state) => state.userAuth)
    .subscribe((userAuth) => {
      this.userInfo = userAuth.userInfo;
    });

  userSignout() {
    this.store.dispatch(userSignout());
    this.store.dispatch(cartEmpty());
  }

  constructor(private store: Store<State>) {}
}
