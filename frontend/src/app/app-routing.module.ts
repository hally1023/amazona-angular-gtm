import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './helpers/admin.guard';
import { AuthGuard } from './helpers/auth.guard';
import { CartComponent } from './screens/cart/cart.component';
import { HomeComponent } from './screens/home/home.component';
import { OrderHistoryComponent } from './screens/order-history/order-history.component';
import { OrderListComponent } from './screens/order-list/order-list.component';
import { OrderComponent } from './screens/order/order.component';
import { PaymentMethodComponent } from './screens/payment-method/payment-method.component';
import { PlaceOrderComponent } from './screens/place-order/place-order.component';
import { ProductDetailsComponent } from './screens/product-details/product-details.component';
import { ProductEditComponent } from './screens/product-edit/product-edit.component';
import { ProductListComponent } from './screens/product-list/product-list.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { RegisterComponent } from './screens/register/register.component';
import { ShippingAddressComponent } from './screens/shipping-address/shipping-address.component';
import { SignInComponent } from './screens/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'cart/:id', component: CartComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id/edit', component: ProductEditComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shipping', component: ShippingAddressComponent },
  { path: 'payment', component: PaymentMethodComponent },
  { path: 'placeorder', component: PlaceOrderComponent },
  { path: 'order/:id', component: OrderComponent },
  { path: 'show-order/:id', component: OrderComponent },
  { path: 'thank-you/:id', component: OrderComponent },
  { path: 'order-complete/:id', component: OrderComponent },
  { path: 'refund-order/:id', component: OrderComponent },
  {
    path: 'productlist',
    component: ProductListComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'orderlist',
    component: OrderListComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'orderhistory',
    component: OrderHistoryComponent,
    canActivate: [AuthGuard],
  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'UA-165692234-4', {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
}
