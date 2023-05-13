import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CartButtonComponent} from "src/app/components/buttons/cart-button/cart-button.component";


@NgModule({
  declarations: [CartButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [CartButtonComponent]
})
export class CartButtonModule {
}
