import {DialogModule} from "@angular/cdk/dialog";
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatRadioModule} from "@angular/material/radio";
import {SearchFieldModule} from "src/app/components/search-field/search-field.module";
import {LocationComponent} from "src/app/modals/location/location.component";


@NgModule({
  declarations: [LocationComponent],
    imports: [
        CommonModule,
        MatIconModule,
        DialogModule,
        MatButtonModule,
        MatRadioModule,
        FormsModule,
        SearchFieldModule
    ],
  exports: [LocationComponent]
})
export class LocationModule {
}
