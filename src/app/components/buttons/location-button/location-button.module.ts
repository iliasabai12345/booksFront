import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LocationButtonComponent} from "src/app/components/buttons/location-button/location-button.component";


@NgModule({
  declarations: [LocationButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [LocationButtonComponent]
})
export class LocationButtonModule {
}
