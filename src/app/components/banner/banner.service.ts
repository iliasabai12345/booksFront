import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private readonly http: HttpClient) {
  }

  getBanners(): Observable<any> {
    return this.http.get('/api/banners/getBanners')
  }
}
