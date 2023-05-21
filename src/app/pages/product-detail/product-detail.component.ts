import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {hidePB, showPB} from "shared/functions/progressbar";
import {ProductDetailService} from "src/app/pages/product-detail/product-detail.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly productDetailService: ProductDetailService) {
  }

  book: any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      showPB();
      this.productDetailService.getBook(res['id']).subscribe(res => {
        hidePB();
        if (res.code === 0) {
          this.book = res.data;
        }
      })
    })
  }
}
