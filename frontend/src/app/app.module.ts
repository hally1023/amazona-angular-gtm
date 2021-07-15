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

@NgModule({
  declarations: [AppComponent, ProductComponent, RatingComponent, CheckoutStepsComponent, LoadingBoxComponent, MessageBoxComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
