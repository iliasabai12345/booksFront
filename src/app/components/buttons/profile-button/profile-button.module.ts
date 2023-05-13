import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {ProfileButtonComponent} from "src/app/components/buttons/profile-button/profile-button.component";


@NgModule({
  declarations: [ProfileButtonComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [ProfileButtonComponent]
})
export class ProfileButtonModule {
}