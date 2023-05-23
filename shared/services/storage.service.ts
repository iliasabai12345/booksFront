import {Injectable} from '@angular/core';
import {LS_CART_COUNT, LS_CITY, LS_USER} from "shared/constants/localstorage";

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
    user ? localStorage.setItem(LS_USER, JSON.stringify(user)) : localStorage.removeItem(LS_USER);
  }

  // city
  get city() {
    const user = localStorage.getItem(LS_CITY);
    return user ? JSON.parse(user) : null;
  }

  set city(city) {
    city && localStorage.setItem(LS_CITY, JSON.stringify(city));
  }

  //cartCount
  get cartCount() {
    const count = localStorage.getItem(LS_CART_COUNT);
    return count ? JSON.parse(count) : null;
  }

  set cartCount(count: number) {
    count && localStorage.setItem(LS_CART_COUNT, JSON.stringify(count));
  }
}
