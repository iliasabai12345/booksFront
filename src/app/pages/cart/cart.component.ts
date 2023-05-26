import {Component, OnInit} from '@angular/core';
import {finalize} from "rxjs";
import {hidePB, showPB} from "shared/functions/progressbar";
import {toast} from "shared/functions/toast";
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
  loadingDelete: string | null = null;

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    showPB();
    this.cartService.getCartProducts()
      .pipe(finalize(() => hidePB()))
      .subscribe(res => {
        if (res.data) {
          this.products = res.data;
          this.storageService.cartCount = res.data.length;
          this.listenerService.cartCount$.next(res.data.length);
        }
      })
  }

  deleteProduct(id: string): void {
    this.loadingDelete = id;
    this.cartService.deleteProduct(id)
      .pipe(finalize(() => this.loadingDelete = null))
      .subscribe(res => {
        if (res.code === 0) {
          toast('success', res.message);
          this.products = res.data.products;
          console.log(res.data.products.length)
          this.listenerService.cartCount$.next(res.data.products.length);
          this.storageService.cartCount = res.data.products.length;
        } else {
          toast('error', res.message);
        }
      })
  }

  get totalSum(): number {
    let count = 0;
    if (this.products.length) {
      this.products.forEach((product: any) => {
        count = count + (product.price * product.qty);
      })
    }
    return count;
  }

  changeInputQty(ref: any, product: any) {
    if (Number(ref.value) > product.count) {
      ref.value = product.count;
      product.qty = product.count;
    } else {
      product.qty = Number(ref.value);
    }
    this.cartService.changeProductQty(product).subscribe(res => {
      const current = this.products.find((book: any) => book._id === product._id);
      current.qty = res.data.qty;
    })
  }

  changeQty(body: any, qty: 1 | -1) {
    const send = {...body};
    send.qty += qty;
    this.cartService.changeProductQty(send).subscribe(res => {
      const current = this.products.find((book: any) => book._id === send._id);
      current.qty = res.data.qty;
    })
  }
}
