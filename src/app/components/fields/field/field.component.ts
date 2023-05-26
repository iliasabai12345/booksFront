import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {
  @Input() placeholder: string = '';
  @Input() errorMessage?: string = '';
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() formControl: FormControl = new FormControl(null);
}
