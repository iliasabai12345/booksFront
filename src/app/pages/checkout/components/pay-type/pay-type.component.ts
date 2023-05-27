import {Component} from '@angular/core';
import {CheckoutService} from "src/app/pages/checkout/checkout.service";

@Component({
  selector: 'app-pay-type',
  templateUrl: './pay-type.component.html',
  styleUrls: ['./pay-type.component.scss']
})
export class PayTypeComponent {
  constructor(private readonly checkoutService: CheckoutService) {
  }

  pay_type = null;
  types = [
    {
      id: 1,
      title: 'Наличными',
      type_code: 1
    },
    {
      id: 2,
      title: 'Картой',
      type_code: 2
    },
    {
      id: 3,
      title: 'KASPI QR',
      type_code: 3
    },
  ]

  select(type: any) {
    this.pay_type = type.title;
  }

  submit() {
    this.checkoutService.pay_type$.next({pay_type: this.pay_type});
    this.checkoutService.step$.next(3);
  }
}
