import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CartButtonComponent} from "src/app/components/buttons/cart-button/cart-button.component";


@NgModule({
  declarations: [CartButtonComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [CartButtonComponent]
})
export class CartButtonModule {
}
