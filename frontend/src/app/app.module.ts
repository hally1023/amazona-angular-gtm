import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { RatingComponent } from './components/rating/rating.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckoutStepsComponent } from './components/checkout-steps/checkout-steps.component';
import { LoadingBoxComponent } from './components/loading-box/loading-box.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { HomeComponent } from './screens/home/home.component';
import { CartComponent } from './screens/cart/cart.component';
import { OrderHistoryComponent } from './screens/order-history/order-history.component';
import { OrderListComponent } from './screens/order-list/order-list.component';
import { OrderComponent } from './screens/order/order.component';
import { PaymentMethodComponent } from './screens/payment-method/payment-method.component';
import { PlaceOrderComponent } from './screens/place-order/place-order.component';
import { ProductEditComponent } from './screens/product-edit/product-edit.component';
import { ProductListComponent } from './screens/product-list/product-list.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { RegisterComponent } from './screens/register/register.component';
import { ShippingAddressComponent } from './screens/shipping-address/shipping-address.component';
import { SignInComponent } from './screens/sign-in/sign-in.component';

@NgModule({
  declarations: [AppComponent, ProductComponent, RatingComponent, CheckoutStepsComponent, LoadingBoxComponent, MessageBoxComponent, HomeComponent, CartComponent, OrderHistoryComponent, OrderListComponent, OrderComponent, PaymentMethodComponent, PlaceOrderComponent, ProductEditComponent, ProductListComponent, ProfileComponent, RegisterComponent, ShippingAddressComponent, SignInComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
