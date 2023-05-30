import {Component} from '@angular/core';
import {finalize} from "rxjs";
import {objectValuesToArray} from "shared/functions/objectValuesToArray";
import {toast} from "shared/functions/toast";
import {translates} from "shared/i18n/lng/languages";
import {ListenerService} from "shared/services/listener.service";
import {CheckoutService} from "src/app/pages/checkout/checkout.service";

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent {
  confirm: boolean = false;

  constructor(public readonly checkoutService: CheckoutService,
              private readonly listenerService: ListenerService) {
  }

  translates: any;

  ngOnInit() {
    this.listenerService.currentLng$.subscribe(res => {
      // @ts-ignore
      this.translates = translates[res];
    })
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
        if (res.code === 0) {
          this.checkoutService.step$.next(4);
          this.checkoutService.order$.next(res?.data);
          toast('success', 'Заказ успешно оформлен!')
        } else {
          toast('error', 'Произошла ошибка во время оформления заказа!');
        }
      })
  }
}
