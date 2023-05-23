import {Component, OnInit} from '@angular/core';
import {ListenerService} from "shared/services/listener.service";
import {StorageService} from "shared/services/storage.service";
import {CartService} from "src/app/pages/cart/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private readonly cartService: CartService,
              private readonly storageService: StorageService,
              private readonly listenerService: ListenerService) {
  }

  products: any = [];

  ngOnInit(): void {
    this.cartService.getCartProducts().subscribe(res => {
      if (res.data && res.data.length) {
        this.products = res.data;
        this.storageService.cartCount = res.data.length;
        this.listenerService.cartCount$.next(res.data.length);
      }
    })
  }
}
