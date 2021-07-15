import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './screens/cart/cart.component';
import { HomeComponent } from './screens/home/home.component';
import { OrderHistoryComponent } from './screens/order-history/order-history.component';
import { OrderComponent } from './screens/order/order.component';
import { PaymentMethodComponent } from './screens/payment-method/payment-method.component';
import { PlaceOrderComponent } from './screens/place-order/place-order.component';
import { ProductEditComponent } from './screens/product-edit/product-edit.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { RegisterComponent } from './screens/register/register.component';
import { ShippingAddressComponent } from './screens/shipping-address/shipping-address.component';
import { SignInComponent } from './screens/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'cart/:id', component: CartComponent },
  { path: 'product/:id/edit', component: ProductEditComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shipping', component: ShippingAddressComponent },
  { path: 'payment', component: PaymentMethodComponent },
  { path: 'order/:id', component: OrderComponent },
  { path: 'show-order/:id', component: OrderComponent },
  { path: 'thank-you/:id', component: OrderComponent },
  { path: 'order-complete/:id', component: OrderComponent },
  { path: 'refund-order/:id', component: OrderComponent },
  { path: 'orderhistory', component: OrderHistoryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
