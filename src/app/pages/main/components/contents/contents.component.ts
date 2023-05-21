import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent {
  constructor(private readonly router: Router) {
  }

  @Input() contents!: any[];

  toCategoryPage(content: any) {
    this.router.navigate(['category/' + content]).then();
  }
}
