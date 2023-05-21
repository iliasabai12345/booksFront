import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {hidePB, showPB} from "shared/functions/progressbar";
import {CategoryService} from "src/app/pages/category/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  constructor(private readonly categoryService: CategoryService,
              private readonly activatedRoute: ActivatedRoute) {
  }

  books: any[] = [];
  title: string = '';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      showPB();
      this.categoryService.getCategory(res['id']).subscribe(res => {
        hidePB();
        if (res.code === 0) {
          this.title = res.data.category_name_ru;
          this.books = res.data.books;
        }
      })
    })
  }
}
