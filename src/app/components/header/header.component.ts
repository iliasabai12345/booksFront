import {Component, OnInit} from '@angular/core';
import {HeaderService} from "src/app/components/header/header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private readonly headerService: HeaderService) {
  }

  categories: any[] = [];

  ngOnInit(): void {
    this.headerService.getCategories().subscribe(res => {
      console.log(res);
      this.categories = res.data;
    })
  }
}
