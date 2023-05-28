import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {GlobalSearchComponent} from "src/app/components/global-search/global-search.component";


@NgModule({
  declarations: [GlobalSearchComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [GlobalSearchComponent]
})
export class GlobalSearchModule {
}
