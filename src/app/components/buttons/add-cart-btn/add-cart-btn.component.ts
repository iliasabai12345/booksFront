import {Component} from '@angular/core';
import {toast} from "shared/functions/toast";

@Component({
  selector: 'app-add-cart-btn',
  templateUrl: './add-cart-btn.component.html',
  styleUrls: ['./add-cart-btn.component.scss']
})
export class AddCartBtnComponent {

  addCart(): void {
    toast('assets/images/cloun.png', 'Книга успешно добавлен в корзину')
  }
}
