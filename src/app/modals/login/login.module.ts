import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SpinnerButtonModule} from "src/app/components/buttons/spinner-button/spinner-button.module";
import {LoginComponent} from "src/app/modals/login/login.component";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    SpinnerButtonModule
  ],
  exports: [LoginComponent]
})
export class LoginModule {
}
