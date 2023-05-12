import {Component} from '@angular/core';
import {SUCCESS_CODE} from "shared/constants/constants";
import {IBanner, IBannerResponse} from "src/app/components/banner/banner.interface";
import {BannerService} from "src/app/components/banner/banner.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  constructor(private readonly bannerService: BannerService) {
  }

  banners: IBanner[] = [];
  currentMainBanner: number | undefined;
  secondaryBanners: IBanner[] = [];
  mainBanners: IBanner[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    this.getBanners();
  }

  getBanners(): void {
    this.bannerService.getBanners().subscribe((res: IBannerResponse) => {
      if (res.code === SUCCESS_CODE) {
        this.banners = res.data;
        this.secondaryBanners = [...res.data].splice((res.data.length - 2), res.data.length);
        this.mainBanners = [...res.data].splice(0, res.data.length - 2);
        setTimeout(() => {
          this.loading = false;
        }, 1000)
        this.iterableBanners();
      }
    })
  }

  iterableBanners(): void {
    let index = 0;
    setInterval(() => {
      if (index === this.mainBanners.length) {
        setTimeout(() => {
          index = 0;
          this.currentMainBanner = index;
        }, 500);
      } else {
        setTimeout(() => {
          this.currentMainBanner = index;
          index++;
        }, 500);
      }
    }, 3000)
  }
}
