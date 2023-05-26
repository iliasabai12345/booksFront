import {Component} from '@angular/core';
import {CheckoutService} from "src/app/pages/checkout/checkout.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  constructor(public readonly checkoutService: CheckoutService) {
  }

  submit(): void {
  }
}
