import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) {
  }

  login(user:any): Observable<any> {
    return this.http.get(`api/auth/getUser/${user.username}/${user.password}`)
  }
}
