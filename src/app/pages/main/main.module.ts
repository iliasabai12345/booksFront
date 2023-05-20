import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BannerModule} from "src/app/components/banner/banner.module";
import {ContentsModule} from "src/app/pages/main/components/contents/contents.module";
import {MainComponent} from "src/app/pages/main/main.component";


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    BannerModule,
    ContentsModule
  ],
  exports: [MainComponent]
})
export class MainModule {
}
