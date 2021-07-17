import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { ShippingAddress } from '../models/shipping-address.model';
import { UserDetails } from '../models/user-details.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public getUserInfo(): UserDetails | null {
    const userInfoJson = localStorage.getItem('userInfo');
    if (userInfoJson) {
      return JSON.parse(userInfoJson);
    }
    return null;
  }

  public setUserInfo(userInfo: UserDetails) {
    const userInfoJson = JSON.stringify(userInfo);
    localStorage.setItem('userInfo', userInfoJson);
  }

  public removeUserInfo() {
    localStorage.removeItem('userInfo');
  }

  public removeCartItems() {
    localStorage.removeItem('cartItems');
  }

  public setCartItems(cartItems: CartItem[]) {
    const cartItemsJson = JSON.stringify(cartItems);
    localStorage.setItem('cartItems', cartItemsJson);
  }

  public getCartItems(): CartItem[] {
    const cartItemsJson = localStorage.getItem('cartItems');
    if (cartItemsJson) {
      return JSON.parse(cartItemsJson);
    }
    return [];
  }

  public getShippingAddress(): ShippingAddress | null {
    const shippingAddressJson = localStorage.getItem('shippingAddress');
    if (shippingAddressJson) {
      return JSON.parse(shippingAddressJson);
    }
    return null;
  }

  public setShippingAddress(shippingAddress: ShippingAddress) {
    const shippingAddressJson = JSON.stringify(shippingAddress);
    localStorage.setItem('shippingAddress', shippingAddressJson);
  }

  public removeShippingAddress() {
    localStorage.removeItem('shippingAddress');
  }

  constructor() {}
}
