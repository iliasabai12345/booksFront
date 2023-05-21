import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SpinnerButtonComponent} from "src/app/components/buttons/spinner-button/spinner-button.component";


@NgModule({
  declarations: [SpinnerButtonComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [SpinnerButtonComponent]
})
export class SpinnerButtonModule {
}
