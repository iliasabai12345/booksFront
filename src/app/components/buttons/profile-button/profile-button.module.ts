import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {ProfileButtonComponent} from "src/app/components/buttons/profile-button/profile-button.component";
import {LoginModule} from "src/app/modals/login/login.module";
import {RegisterModule} from "src/app/modals/register/register.module";


@NgModule({
  declarations: [ProfileButtonComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    LoginModule,
    RegisterModule
  ],
  exports: [ProfileButtonComponent]
})
export class ProfileButtonModule {
}
