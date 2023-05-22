import {Component, Input} from '@angular/core';
import {StorageService} from "shared/services/storage.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  constructor(private readonly storageService: StorageService) {
  }

  cartProduct: any;
  book: any;

  @Input() set product(book: any) {
    this.book = book;
    if (this.storageService.user) {
      this.cartProduct = {
        ...book,
        user_id: this.storageService.user._id
      }
    }
  };
}
