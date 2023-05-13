import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {GlobalSearchComponent} from "src/app/components/global-search/global-search.component";


@NgModule({
  declarations: [GlobalSearchComponent],
  imports: [
    CommonModule
  ],
  exports: [GlobalSearchComponent]
})
export class GlobalSearchModule {
}
