import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SpinnerButtonModule} from "src/app/components/buttons/spinner-button/spinner-button.module";
import {BooksInfoModule} from "src/app/modals/books-info/books-info.module";
import {OrdersComponent} from "src/app/pages/orders/orders.component";


@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    SpinnerButtonModule,
    BooksInfoModule
  ],
  exports: [OrdersComponent]
})
export class OrdersModule {
}
