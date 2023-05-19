import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {
  @Input() placeholder: string = 'Найти город';
  @Input() items: any[] = [];
  @Input() key: string = '';
  @Output() itemsChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  fixedArray: any[] = [];

  filterArray(value: string): void {
    if (this.items.length && !this.fixedArray.length) {
      this.fixedArray = this.items;
    }
    const arr = [...this.fixedArray];
    const filtered = arr.filter(res => res[this.key].toLowerCase().includes(value.toLowerCase()));
    this.itemsChange.emit(filtered);
  }
}
