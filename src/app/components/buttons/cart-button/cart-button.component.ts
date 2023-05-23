import {Component, OnInit} from '@angular/core';
import {ListenerService} from "shared/services/listener.service";
import {StorageService} from "shared/services/storage.service";

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit {
  cartCount: number = this.storageService.cartCount || 0;

  constructor(public readonly listenerService: ListenerService,
              private readonly storageService: StorageService) {
  }

  ngOnInit(): void {
    this.listenerService.cartCount$.subscribe(count => {
      if (count) {
        this.cartCount = count;
      }
    })
  }
}
