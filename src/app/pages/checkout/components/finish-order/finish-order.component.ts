import {Component} from '@angular/core';
import {CheckoutService} from "src/app/pages/checkout/checkout.service";

@Component({
  selector: 'app-finish-order',
  templateUrl: './finish-order.component.html',
  styleUrls: ['./finish-order.component.scss']
})
export class FinishOrderComponent {
  constructor(public readonly checkoutService: CheckoutService) {
  }
}
