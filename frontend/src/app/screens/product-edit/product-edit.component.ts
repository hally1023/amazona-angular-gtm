import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { detailsProduct } from 'src/app/actions/product/details-product.actions';
import {
  updateProduct,
  updateProductReset,
} from 'src/app/actions/product/update-product.actions';
import { Product } from 'src/app/models/product.model';
import { State } from 'src/app/reducers';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  productId: string | undefined;

  loading: boolean | undefined;
  error: any;
  product: Product | undefined;

  loadingUpdate: boolean | undefined;
  errorUpdate: any;
  successUpdate: boolean | undefined;

  loadingUpload: boolean | undefined;
  errorUpload: any;
  successUpload: boolean | undefined;

  name = '';
  price = 0;
  image = '';
  category = '';
  brand = '';
  countInStock = 0;
  description = '';

  constructor(
    private store: Store<State>,
    private router: Router,
    private route: ActivatedRoute,
    private fileUploadService: FileUploadService
  ) {}

  submitHandler = () => {
    this.store.dispatch(
      updateProduct({
        product: {
          _id: this.productId,
          name: this.name,
          price: this.price,
          image: this.image,
          category: this.category,
          brand: this.brand,
          countInStock: this.countInStock,
          description: this.description,
        },
      })
    );
  };

  handleImageUpload(files: FileList) {
    const imageFile = files.item(0);

    this.loadingUpload = true;

    this.fileUploadService.uploadProductImage(imageFile!).subscribe(
      (data) => {
        this.image = data;
        this.loadingUpload = false;
      },
      (error) => {
        this.errorUpload = JSON.parse(error.error).message;
        console.log(error);
        this.loadingUpload = false;
      }
    );
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = params.id;
      this.productId = productId;

      if (productId) {
        this.store.dispatch(detailsProduct({ productId }));
      }
    });

    this.store
      .select((state) => state.productDetails)
      .subscribe((productDetails) => {
        this.loading = productDetails.loading;
        this.error = productDetails.error;

        const product = productDetails.product;

        if (product) {
          this.name = product.name;
          this.price = product.price;
          this.description = product.description;
          this.countInStock = product.countInStock;
          this.brand = product.brand;
          this.category = product.category;
          this.image = product.image;
        }

        if (this.successUpdate) {
        }

        if ((product && product._id !== this.productId) || this.successUpdate) {
          this.store.dispatch(updateProductReset());
          this.store.dispatch(detailsProduct({ productId: this.productId! }));
        }
      });

    this.store
      .select((state) => state.productUpdate)
      .subscribe((productUpdate) => {
        this.loadingUpdate = productUpdate.loading;
        this.errorUpdate = productUpdate.error;
        this.successUpdate = productUpdate.success;

        if (productUpdate.success) {
          this.router.navigate([`/productlist`]);
        }
      });
  }
}
