import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {StorageService} from "shared/services/storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient,
              private readonly router: Router,
              private readonly storageService: StorageService) {
  }

  login(user: any): Observable<any> {
    return this.http.get(`api/auth/getUser/${user.username}/${user.password}`)
  }

  register(body: any): Observable<any> {
    return this.http.post('api/auth/addUser', body)
  }

  logout(): void {
    this.storageService.user = null;
    this.storageService.cartCount = 0;
    this.router.navigate(['/']).then();
  }
}
