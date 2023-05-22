import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddCartBtnService {

  constructor(private readonly http: HttpClient) {
  }

  addCart(body: any): Observable<any> {
    return this.http.post(`api/cart/addBook`, body)
  }
}
