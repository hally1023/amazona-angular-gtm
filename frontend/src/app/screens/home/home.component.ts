import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Store, select } from '@ngrx/store';
import { listProductsSuccess } from 'src/app/actions/product/list-product.actions';
import { selectProducts } from 'src/app/selectors/product/product.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products$: any = this.store.pipe(select(selectProducts as any));

  constructor(private productsService: ProductsService, private store: Store) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((products) =>
        this.store.dispatch(listProductsSuccess({ data: products }))
      );
  }
}
