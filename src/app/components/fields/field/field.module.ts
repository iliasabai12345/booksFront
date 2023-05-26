import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {FieldComponent} from "src/app/components/fields/field/field.component";


@NgModule({
  declarations: [FieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [FieldComponent]
})
export class FieldModule {
}
