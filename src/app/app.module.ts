import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatStepperModule} from "@angular/material/stepper";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddCartBtnModule} from "src/app/components/buttons/add-cart-btn/add-cart-btn.module";
import {SpinnerButtonModule} from "src/app/components/buttons/spinner-button/spinner-button.module";
import {FieldModule} from "src/app/components/fields/field/field.module";
import {FooterModule} from "src/app/components/footer/footer.module";
import {HeaderModule} from "src/app/components/header/header.module";
import {ProductCardModule} from "src/app/components/product-card/product-card.module";
import {BooksInfoModule} from "src/app/modals/books-info/books-info.module";
import {CartModule} from "src/app/pages/cart/cart.module";
import {CheckoutModule} from "src/app/pages/checkout/checkout.module";
import {MainModule} from "src/app/pages/main/main.module";
import {OrdersModule} from "src/app/pages/orders/orders.module";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CategoryComponent} from './pages/category/category.component';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainModule,
    BrowserAnimationsModule,
    HeaderModule,
    FooterModule,
    ProductCardModule,
    MatProgressBarModule,
    AddCartBtnModule,
    SpinnerButtonModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CheckoutModule,
    CartModule,
    FieldModule,
    OrdersModule,
    BooksInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
