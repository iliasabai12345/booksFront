import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatRippleModule} from "@angular/material/core";
import {CheckoutComponent} from "src/app/pages/checkout/checkout.component";
import {UserInfoComponent} from './components/user-info/user-info.component';
import { StepperComponent } from './components/stepper/stepper.component';


@NgModule({
  declarations: [CheckoutComponent, UserInfoComponent, StepperComponent],
  imports: [
    CommonModule,
    MatRippleModule
  ],
  exports: [CheckoutComponent]
})
export class CheckoutModule {
}
