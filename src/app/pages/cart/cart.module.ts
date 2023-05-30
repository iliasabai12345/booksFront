import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {SpinnerButtonModule} from "src/app/components/buttons/spinner-button/spinner-button.module";
import {CartComponent} from "src/app/pages/cart/cart.component";



@NgModule({
  declarations: [CartComponent],
    imports: [
        CommonModule,
        SpinnerButtonModule,
        RouterModule
    ],
  exports:[CartComponent]
})
export class CartModule { }
