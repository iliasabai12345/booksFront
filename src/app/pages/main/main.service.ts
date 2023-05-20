import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private readonly http: HttpClient) {
  }

  getBooks(): Observable<any> {
    return this.http.get('api/books/getAllBooks')
  }

  getContents(): Observable<any> {
    return this.http.get('api/categories/getContents')
  }
}
