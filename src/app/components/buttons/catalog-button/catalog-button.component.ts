import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-catalog-button',
  templateUrl: './catalog-button.component.html',
  styleUrls: ['./catalog-button.component.scss']
})
export class CatalogButtonComponent {
  @Input() categories: any[] = [];
}
