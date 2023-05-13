import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private readonly http: HttpClient) {
  }

  getCategories(): Observable<any> {
    return this.http.get('api/categories/getCategories')
  }
}
