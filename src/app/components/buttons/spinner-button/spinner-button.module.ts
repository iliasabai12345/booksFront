import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SpinnerButtonComponent} from "src/app/components/buttons/spinner-button/spinner-button.component";


@NgModule({
  declarations: [SpinnerButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [SpinnerButtonComponent]
})
export class SpinnerButtonModule {
}
