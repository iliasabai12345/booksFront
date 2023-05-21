import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-catalog-button',
  templateUrl: './catalog-button.component.html',
  styleUrls: ['./catalog-button.component.scss']
})
export class CatalogButtonComponent {
  constructor(private readonly router: Router) {
  }

  @Input() categories: any[] = [];

  toCategory(keyword: string) {
    this.router.navigate(['category/' + keyword]).then();
  }
}
