import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {LogoComponent} from "src/app/components/logo/logo.component";


@NgModule({
  declarations: [LogoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LogoComponent]
})
export class LogoModule {
}
