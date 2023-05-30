import {Component, Input} from '@angular/core';
import {translates} from "shared/i18n/lng/languages";
import {ListenerService} from "shared/services/listener.service";
import {StorageService} from "shared/services/storage.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  constructor(private readonly storageService: StorageService,
              private readonly listenerService: ListenerService
  ) {
  }

  translates: any;

  ngOnInit() {
    this.listenerService.currentLng$.subscribe(res => {
      // @ts-ignore
      this.translates = translates[res];
    })
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
