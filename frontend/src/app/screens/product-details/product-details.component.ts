import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { detailsProduct } from 'src/app/actions/product/details-product.actions';
import { Product } from 'src/app/models/product.model';
import { State } from 'src/app/reducers';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  qty = 1;
  loading: boolean | undefined;
  error: string | undefined;
  product: Product | undefined;
  countArr: number[] | undefined;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  addToCartHandler() {
    this.router.navigate([`/cart/${this.product?._id}`], {
      queryParams: {
        qty: this.qty,
      },
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = params.id;
      if (productId) this.store.dispatch(detailsProduct({ productId }));
    });

    this.store
      .select((state) => state.productDetails)
      .subscribe((productDetails) => {
        this.loading = productDetails.loading;
        this.error = productDetails.error;
        this.product = productDetails.product;
        this.countArr = [...Array(productDetails.product?.countInStock).keys()];
      });
  }
}
