import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterModule} from "@angular/router";
import {BannerComponent} from "src/app/components/banner/banner.component";
import {SwiperModule} from "swiper/angular";


@NgModule({
  declarations: [BannerComponent],
    imports: [
        CommonModule,
        SwiperModule,
        MatProgressSpinnerModule,
        MatButtonToggleModule,
        RouterModule
    ],
  exports: [BannerComponent]
})
export class BannerModule {
}
