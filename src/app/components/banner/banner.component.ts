import {ChangeDetectorRef, Component} from '@angular/core';
import {SUCCESS_CODE} from "shared/constants/constants";
import {IBanner, IBannerResponse} from "src/app/components/banner/banner.interface";
import {BannerService} from "src/app/components/banner/banner.service";

@Component({
  selector: 'app-banner',
  standalone: true,
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  constructor(private readonly bannerService: BannerService) {
  }

  banners: IBanner[] = [];

  ngOnInit(): void {
    this.getBanners();
  }

  getBanners(): void {
    this.bannerService.getBanners().subscribe((res: IBannerResponse) => {
      if (res.code === SUCCESS_CODE) {
        this.banners = res.data;
        console.log(res.data);
        this.initSwiper()
      }
      console.log(res);
    })
  }

  initSwiper(): void {
    // @ts-ignore
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      speed: 1000,

      // Autoplay
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }
}
