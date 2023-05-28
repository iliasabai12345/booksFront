import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalSearchService {

  constructor(private readonly http: HttpClient) {

  }

  getSearchedBooks(value: string): Observable<any> {
    return this.http.get(`api/books/getSearchedBooks/${value}`)
  }
}
