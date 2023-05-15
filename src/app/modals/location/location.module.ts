import {DialogModule} from "@angular/cdk/dialog";
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {LocationComponent} from "src/app/modals/location/location.component";


@NgModule({
  declarations: [LocationComponent],
  imports: [
    CommonModule,
    MatIconModule,
    DialogModule
  ],
  exports: [LocationComponent]
})
export class LocationModule {
}
