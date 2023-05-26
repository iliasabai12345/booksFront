import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
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
              private readonly router: Router,
              private readonly storageService: StorageService) {
  }

  ngOnInit(): void {
    this.listenerService.cartCount$.subscribe(count => {
      if (count || count === 0) {
        this.cartCount = count;
      }
    })
  }

  toCart(): void {
    if (this.storageService.user) {
      this.router.navigate(['/cart']).then();
    }
  }
}
