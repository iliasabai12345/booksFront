import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {AddCartBtnModule} from "src/app/components/buttons/add-cart-btn/add-cart-btn.module";
import {ProductCardComponent} from "src/app/components/product-card/product-card.component";


@NgModule({
  declarations: [ProductCardComponent],
    imports: [
        CommonModule,
        AddCartBtnModule,
        RouterModule
    ],
  exports: [ProductCardComponent]
})
export class ProductCardModule {
}
