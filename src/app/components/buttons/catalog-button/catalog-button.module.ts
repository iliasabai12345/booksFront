import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {CatalogButtonComponent} from "src/app/components/buttons/catalog-button/catalog-button.component";


@NgModule({
  declarations: [CatalogButtonComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [CatalogButtonComponent]
})
export class CatalogButtonModule {
}
