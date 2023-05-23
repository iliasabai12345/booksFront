import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AddCartBtnComponent} from "src/app/components/buttons/add-cart-btn/add-cart-btn.component";
import {SpinnerButtonModule} from "src/app/components/buttons/spinner-button/spinner-button.module";


@NgModule({
  declarations: [AddCartBtnComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    SpinnerButtonModule
  ],
  exports: [AddCartBtnComponent]
})
export class AddCartBtnModule {
}
