import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {toast} from "shared/functions/toast";
import {AddCartBtnService} from "src/app/components/buttons/add-cart-btn/add-cart-btn.service";

@Component({
  selector: 'app-add-cart-btn',
  templateUrl: './add-cart-btn.component.html',
  styleUrls: ['./add-cart-btn.component.scss']
})
export class AddCartBtnComponent {
  constructor(private readonly addCartBtnService: AddCartBtnService) {
  }

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
  })

  @Input() set book(book: any) {
    this.form.patchValue(book);
  };

  addCart(): void {
    this.addCartBtnService.addCart(this.form.value).subscribe(res => {
      if (res.code === 0) {
        toast(res.data.img_url, res.message);
      } else {
        toast('error', res.message || 'Произошла ошибка');
      }
    })
  }
}
