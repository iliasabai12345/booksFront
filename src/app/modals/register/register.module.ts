import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SpinnerButtonModule} from "src/app/components/buttons/spinner-button/spinner-button.module";
import {RegisterComponent} from "src/app/modals/register/register.component";


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SpinnerButtonModule
  ],
  exports: [RegisterComponent]
})
export class RegisterModule {
}
