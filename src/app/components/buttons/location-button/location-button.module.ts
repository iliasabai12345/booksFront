import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatDialogModule} from "@angular/material/dialog";
import {LocationButtonComponent} from "src/app/components/buttons/location-button/location-button.component";
import {LocationModule} from "src/app/modals/location/location.module";


@NgModule({
  declarations: [LocationButtonComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    LocationModule
  ],
  exports: [LocationButtonComponent]
})
export class LocationButtonModule {
}
