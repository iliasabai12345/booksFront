import {Component} from '@angular/core';
import {finalize} from "rxjs";
import {objectValuesToArray} from "shared/functions/objectValuesToArray";
import {CheckoutService} from "src/app/pages/checkout/checkout.service";

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent {
  confirm: boolean = false;

  constructor(public readonly checkoutService: CheckoutService) {
  }

  get userInfo() {
    return objectValuesToArray(this.checkoutService.userForm$.getValue());
  }

  get payType() {
    return objectValuesToArray(this.checkoutService.pay_type$.getValue());
  }

  changeInfoStep(step: number) {
    this.checkoutService.step$.next(step);
  }

  setOrder() {
    this.confirm = true;
    this.checkoutService.mergeForms()
      .pipe(finalize(() => this.confirm = false))
      .subscribe(res => {
        console.log(res);
        this.checkoutService.step$.next(4);
      })
  }
}
