import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AddCartBtnComponent} from "src/app/components/buttons/add-cart-btn/add-cart-btn.component";


@NgModule({
  declarations: [AddCartBtnComponent],
  imports: [
    CommonModule
  ],
  exports: [AddCartBtnComponent]
})
export class AddCartBtnModule {
}
