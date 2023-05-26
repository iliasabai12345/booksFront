import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss']
})
export class SpinnerButtonComponent {
  @Input() text: string = '';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() color: string = '#febd01';
  @Input() backgroundColor: string = '#febd01';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
}
