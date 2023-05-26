import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StorageService} from "shared/services/storage.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  constructor(private readonly storageService: StorageService) {
  }

  infoForm: FormGroup = new FormGroup<any>({
    user_name: new FormControl(null, [Validators.required]),
    phone_number: new FormControl(null, [Validators.required, Validators.max(11)]),
    city: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required])
  })
}
