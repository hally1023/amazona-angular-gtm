import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class GtagService {
  constructor() {}

  eventEmit({ eventName, details }: { eventName: string; details: any }) {
    gtag('event', eventName, details);
  }

  mapCartItemToGtag = (cartItem: CartItem) => {
    return {
      name: cartItem.name,
      list_name: 'List',
      quantity: cartItem?.qty,
      price: cartItem.price,
    };
  };

  mapProductToGtag = (product: Product) => {
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
