import {Injectable} from '@angular/core';
import {LS_USER} from "shared/constants/localstorage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  get user() {
    const user = localStorage.getItem(LS_USER);
    return user ? JSON.parse(user) : null;
  }

  set user(user) {
    user && localStorage.setItem(LS_USER, JSON.stringify(user));
  }
}
