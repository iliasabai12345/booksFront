import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ProductCardModule} from "src/app/components/product-card/product-card.module";
import {ContentsComponent} from "src/app/pages/main/components/contents/contents.component";


@NgModule({
  declarations: [ContentsComponent],
  imports: [
    CommonModule,
    ProductCardModule
  ],
  exports: [ContentsComponent]
})
export class ContentsModule {
}
