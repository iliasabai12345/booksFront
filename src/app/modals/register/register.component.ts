import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {toast} from "shared/functions/toast";
import {AuthService} from "shared/services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private readonly authService: AuthService,
              private readonly dialogRef: MatDialogRef<RegisterComponent>) {
  }

  loading: boolean = false;
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    isAdmin: new FormControl(false)
  })

  register() {
    this.loading = true;
    this.authService.register(this.form.value).subscribe(res => {
      if (res.code === 0) {
        this.dialogRef.close(res.data);
        toast('success', res.message);
      } else {
        toast('error', res.message);
      }
      this.loading = false;
    });
  }
}
