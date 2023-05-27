import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {MatRippleModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {SpinnerButtonModule} from "src/app/components/buttons/spinner-button/spinner-button.module";
import {CheckoutComponent} from "src/app/pages/checkout/checkout.component";
import {UserInfoComponent} from './components/user-info/user-info.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { PayTypeComponent } from './components/pay-type/pay-type.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { FinishOrderComponent } from './components/finish-order/finish-order.component';


@NgModule({
  declarations: [CheckoutComponent, UserInfoComponent, StepperComponent, PayTypeComponent, ConfirmOrderComponent, FinishOrderComponent],
  imports: [
    CommonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    SpinnerButtonModule,
    MatRadioModule
  ],
  exports: [CheckoutComponent]
})
export class CheckoutModule {
}
