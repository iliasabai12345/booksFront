import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HeaderComponent} from "src/app/components/header/header.component";


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
