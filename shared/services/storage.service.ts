import {Injectable} from '@angular/core';
import {LS_CITY, LS_USER} from "shared/constants/localstorage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  // user
  get user() {
    const user = localStorage.getItem(LS_USER);
    return user ? JSON.parse(user) : null;
  }

  set user(user) {
    user && localStorage.setItem(LS_USER, JSON.stringify(user));
  }

  // city
  get city() {
    const user = localStorage.getItem(LS_CITY);
    return user ? JSON.parse(user) : null;
  }

  set city(city) {
    city && localStorage.setItem(LS_CITY, JSON.stringify(city));
  }
}
