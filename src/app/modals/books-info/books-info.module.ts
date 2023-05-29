import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {BooksInfoComponent} from "src/app/modals/books-info/books-info.component";


@NgModule({
  declarations: [BooksInfoComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [BooksInfoComponent]
})
export class BooksInfoModule {
}
