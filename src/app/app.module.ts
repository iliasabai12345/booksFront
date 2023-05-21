import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterModule} from "src/app/components/footer/footer.module";
import {HeaderModule} from "src/app/components/header/header.module";
import {ProductCardModule} from "src/app/components/product-card/product-card.module";
import {MainModule} from "src/app/pages/main/main.module";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

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
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
