import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RegisterComponent} from "src/app/modals/register/register.component";


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule
  ],
  exports: [RegisterComponent]
})
export class RegisterModule {
}
