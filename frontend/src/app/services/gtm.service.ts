import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class GtmService {
  constructor() {}

  mapCartItemToGtm = (item: CartItem) => {
    return {
      name: item.name,
      list_name: 'List',
      quantity: item?.qty,
      price: item.price,
    };
  };

  mapProductToGtm = (product: Product) => {
    return {
      id: product._id,
      name: product.name,
      list_name: 'List',
      brand: product.brand,
      category: product.category,
      quantity: product?.countInStock,
      price: product.price,
    };
  };
}
