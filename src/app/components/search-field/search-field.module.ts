import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {SearchFieldComponent} from "src/app/components/search-field/search-field.component";


@NgModule({
  declarations: [SearchFieldComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [SearchFieldComponent]
})
export class SearchFieldModule {
}
