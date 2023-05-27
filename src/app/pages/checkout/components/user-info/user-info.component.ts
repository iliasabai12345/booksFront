import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StorageService} from "shared/services/storage.service";
import {CheckoutService} from "src/app/pages/checkout/checkout.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  constructor(private readonly storageService: StorageService,
              private readonly checkoutService: CheckoutService) {
  }

  infoForm: FormGroup = new FormGroup<any>({
    user_name: new FormControl(null, [Validators.required]),
    phone_number: new FormControl(null, [Validators.required]),
    city: new FormControl(this.city, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    house: new FormControl(null),
    flat: new FormControl(null),
    comment: new FormControl(null),
    delivery_type: new FormControl('Доставка')
  })

  get city(): string {
    return this.storageService.city || 'Алматы'
  }

  submit(): void {
    console.log(this.infoForm.value);
    if (this.infoForm.valid) {
      this.checkoutService.userForm$.next(this.infoForm.value);
      this.checkoutService.step$.next(2);
    }
  }
}
