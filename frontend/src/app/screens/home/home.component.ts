import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Store, select } from '@ngrx/store';
import {
  listProducts,
  listProductsSuccess,
} from 'src/app/actions/product/list-product.actions';
import { selectProductList, State } from 'src/app/reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products$ = this.store.pipe(select(selectProductList));

  constructor(
    private productsService: ProductsService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(listProducts());
  }
}
