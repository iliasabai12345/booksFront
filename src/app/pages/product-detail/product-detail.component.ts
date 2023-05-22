import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {hidePB, showPB} from "shared/functions/progressbar";
import {StorageService} from "shared/services/storage.service";
import {ProductDetailService} from "src/app/pages/product-detail/product-detail.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly storageService: StorageService,
              private readonly productDetailService: ProductDetailService) {
  }

  book: any;
  cartBook: any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      showPB();
      this.productDetailService.getBook(res['id']).subscribe(res => {
        hidePB();
        if (res.code === 0) {
          this.book = res.data;
          if (this.storageService.user) {
            this.cartBook = {
              ...res.data,
              user_id: this.storageService.user._id
            }
          }
        }
      })
    })
  }
}
