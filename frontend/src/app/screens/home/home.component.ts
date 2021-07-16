import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Store } from '@ngrx/store';
import { listProducts } from 'src/app/actions/product/list-product.actions';
import { State } from 'src/app/reducers';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] | undefined;
  loading: boolean | undefined;
  error: any | undefined;

  productsList$ = this.store
    .select((state) => state.productList)
    .subscribe((productList) => {
      this.loading = productList.loading;
      this.error = productList.error;
      this.products = productList.products;
    });

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(listProducts());
  }
}
