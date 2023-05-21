import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private readonly http: HttpClient) {
  }

  getCategory(categoryName: string): Observable<any> {
    return this.http.get(`api/books/getCategoryBooks/${categoryName}`)
  }
}
