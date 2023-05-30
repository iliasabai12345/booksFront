import {Component} from '@angular/core';
import {translates} from "shared/i18n/lng/languages";
import {ListenerService} from "shared/services/listener.service";
import {CheckoutService} from "src/app/pages/checkout/checkout.service";

@Component({
  selector: 'app-finish-order',
  templateUrl: './finish-order.component.html',
  styleUrls: ['./finish-order.component.scss']
})
export class FinishOrderComponent {
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
}
