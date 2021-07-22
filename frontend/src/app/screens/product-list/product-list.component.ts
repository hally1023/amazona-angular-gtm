import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  createProduct,
  createProductReset,
} from 'src/app/actions/product/create-product.actions';
import {
  deleteProduct,
  deleteProductReset,
} from 'src/app/actions/product/delete-product.actions';
import { listProducts } from 'src/app/actions/product/list-product.actions';
import { Product } from 'src/app/models/product.model';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  loading: boolean | undefined;
  error: any;
  products: Product[] = [];

  loadingDelete: boolean | undefined;
  errorDelete: any;
  successDelete: boolean | undefined;

  loadingCreate: boolean | undefined;
  errorCreate: any;
  successCreate: boolean | undefined;

  constructor(private store: Store<State>, private router: Router) {}

  editHandler = (productId: string) => {
    this.router.navigate([`/product/${productId}/edit`]);
  };

  deleteHandler = (productId: string) => {
    if (window.confirm('Are you sure to delete?')) {
      this.store.dispatch(deleteProduct({ productId }));
    }
  };

  createHandler = () => {
    this.store.dispatch(createProduct());
  };

  ngOnInit(): void {
    this.store.dispatch(listProducts());

    this.store
      .select((state) => state.productList)
      .subscribe((productList) => {
        this.loading = productList.loading;
        this.error = productList.error;
        this.products = productList.products ?? [];
      });

    this.store
      .select((state) => state.productCreate)
      .subscribe((productCreate) => {
        this.loadingCreate = productCreate.loading;
        this.errorCreate = productCreate.error;
        this.successCreate = productCreate.success;

        if (productCreate.success) {
          this.router.navigate([`/product/${productCreate.product?._id}/edit`]);
          this.store.dispatch(createProductReset());
        }
      });

    this.store
      .select((state) => state.productDelete)
      .subscribe((productDelete) => {
        this.loadingDelete = productDelete.loading;
        this.errorDelete = productDelete.error;
        this.successDelete = productDelete.success;

        if (productDelete.success) {
          this.store.dispatch(deleteProductReset());
          this.store.dispatch(listProducts());
        }
      });
  }
}
