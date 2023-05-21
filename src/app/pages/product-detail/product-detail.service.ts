import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private readonly http: HttpClient) {
  }

  getBook(id: string): Observable<any> {
    return this.http.get(`api/books/getOneBook/${id}`);
  }
}
