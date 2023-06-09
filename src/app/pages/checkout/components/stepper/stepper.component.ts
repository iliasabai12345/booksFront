import {Component, Input} from '@angular/core';
import {translates} from "shared/i18n/lng/languages";
import {ListenerService} from "shared/services/listener.service";
import {CheckoutService} from "src/app/pages/checkout/checkout.service";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
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

  @Input() currentStep: number = 1;
  steps = [
    {
      id: 1,
      title: 'Адрес и способ доставки',
      isActive: true,
      disabled: false,
      enabled: false
    }, {
      id: 2,
      title: 'Способ оплаты',
      isActive: false,
      disabled: false,
      enabled: false
    }, {
      id: 3,
      title: 'Проверка и подтверждение',
      isActive: false,
      disabled: false,
      enabled: false
    }, {
      id: 4,
      title: 'Готово',
      isActive: false,
      disabled: false,
      enabled: false
    },
  ]

  changeStep(id: number) {
    this.checkoutService.step$.next(id);
  }
}
