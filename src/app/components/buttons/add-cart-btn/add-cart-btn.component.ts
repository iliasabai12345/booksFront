import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {finalize} from "rxjs";
import {toast} from "shared/functions/toast";
import {ListenerService} from "shared/services/listener.service";
import {StorageService} from "shared/services/storage.service";
import {AddCartBtnService} from "src/app/components/buttons/add-cart-btn/add-cart-btn.service";

@Component({
  selector: 'app-add-cart-btn',
  templateUrl: './add-cart-btn.component.html',
  styleUrls: ['./add-cart-btn.component.scss']
})
export class AddCartBtnComponent {
  constructor(private readonly addCartBtnService: AddCartBtnService,
              private readonly storageService: StorageService,
              private readonly listenerService: ListenerService) {
  }

  loading: boolean = false;

  form = new FormGroup({
    user_id: new FormControl(null),
    qty: new FormControl(1),
    category_name_ru: new FormControl(null),
    title: new FormControl(null),
    category: new FormControl(null),
    count: new FormControl(null),
    img_url: new FormControl(null),
    old_price: new FormControl(null),
    sku: new FormControl(null),
    price: new FormControl(null),
    category_name_kz: new FormControl(null),
    book_id: new FormControl(null),
    sum: new FormControl(0)
  })

  @Input() set book(book: any) {
    this.form.patchValue(book);
    this.form.controls.book_id.patchValue(book._id);
    this.form.controls.sum.patchValue(Number(book.price));
  };

  addCart(): void {
    this.loading = true;
    this.addCartBtnService.addCart(this.form.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe(res => {
        if (res.code === 0) {
          toast(res.data.img_url, res.message);
          const cartCount = this.listenerService.cartCount$.getValue();
          this.storageService.cartCount = cartCount + 1;
          this.listenerService.cartCount$.next(cartCount + 1);

        } else {
          toast('error', res.message || 'Произошла ошибка');
        }
      })
  }
}
