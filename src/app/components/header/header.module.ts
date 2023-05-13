import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CartButtonModule} from "src/app/components/buttons/cart-button/cart-button.module";
import {CatalogButtonModule} from "src/app/components/buttons/catalog-button/catalog-button.module";
import {LanguageButtonModule} from "src/app/components/buttons/language-button/language-button.module";
import {LocationButtonModule} from "src/app/components/buttons/location-button/location-button.module";
import {ProfileButtonModule} from "src/app/components/buttons/profile-button/profile-button.module";
import {HeaderComponent} from "src/app/components/header/header.component";
import {LogoModule} from "src/app/components/logo/logo.module";


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    CatalogButtonModule,
    LogoModule,
    LocationButtonModule,
    ProfileButtonModule,
    CartButtonModule,
    LanguageButtonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
