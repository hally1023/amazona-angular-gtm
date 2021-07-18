import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { cartAddItem, cartRemoveItem } from 'src/app/actions/cart/cart.actions';
import { CartItem } from 'src/app/models/cart-item.model';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  totalItems() {
    return this.cartItems.reduce((a, c) => a + c.qty, 0);
  }

  totalPrice() {
    return this.cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  }

  stockCount(item: CartItem) {
    return [...Array(item?.countInStock).keys()];
  }

  onQuantityChange(productId: string, qty: string) {
    this.store.dispatch(cartAddItem({ productId, qty: parseInt(qty) }));
  }

  removeFromCartHandler(productId: string) {
    this.store.dispatch(cartRemoveItem({ productId }));
  }

  checkoutHanlder() {
    this.router.navigate(['/signin'], {
      queryParams: {
        redirect: 'shipping',
      },
    });
  }

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.route.queryParams.subscribe((queryParams) => {
        const productId = params.id;
        const qty = parseInt(queryParams.qty);

        if (productId && qty)
          this.store.dispatch(cartAddItem({ productId: productId, qty }));
      });
    });

    this.store
      .select((state) => state.cart)
      .subscribe((cart) => {
        this.cartItems = cart.cartItems;
      });
  }
}
