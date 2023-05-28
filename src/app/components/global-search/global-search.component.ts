import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {finalize} from "rxjs";
import {hidePB, showPB} from "shared/functions/progressbar";
import {GlobalSearchService} from "src/app/components/global-search/global-search.service";

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent {
  constructor(private readonly globalSearchService: GlobalSearchService,
              private readonly router: Router) {
  }

  books: any[] = [];

  getProducts(val: string) {
    showPB();
    this.globalSearchService.getSearchedBooks(val)
      .pipe(finalize(() => hidePB()))
      .subscribe(res => {
        this.books = res.data.splice(0, 10);
      })
  }

  toDetail(id: string, input: any) {
    this.router.navigate(['/detail/' + id]).then(() => {
      this.books = [];
      input.value = '';
    })
  }
}
