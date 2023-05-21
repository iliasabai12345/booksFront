import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) {
  }

  login(user: any): Observable<any> {
    return this.http.get(`api/auth/getUser/${user.username}/${user.password}`)
  }

  register(body: any): Observable<any> {
    return this.http.post('api/auth/addUser', body)
  }
}
