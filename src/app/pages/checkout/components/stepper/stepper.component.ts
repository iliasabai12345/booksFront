import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

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
    this.currentStep = id;
  }
}
