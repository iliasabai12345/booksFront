import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterModule} from "src/app/components/footer/footer.module";
import {HeaderModule} from "src/app/components/header/header.module";
import {MainModule} from "src/app/pages/main/main.module";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainModule,
    BrowserAnimationsModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
