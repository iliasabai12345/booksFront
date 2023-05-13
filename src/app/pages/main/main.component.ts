import {Component} from '@angular/core';
import {MainService} from "src/app/pages/main/main.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(private readonly mainsService: MainService) {
  }

  ngOnInit() {
    console.log('work');
    const categories: any[] = []
    this.mainsService.getBooks().subscribe(books => {
      console.log(books);
      books.data.forEach((book: any) => {
        const current = categories.find(res => book.category === res.keyword);
        !current && categories.push({
          title: book.category_name_ru,
          title_kk: book.category_name_kz,
          keyword: book.category
        })
      })
      console.log(categories)
    });
  }
}
