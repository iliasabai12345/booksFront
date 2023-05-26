import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() {
  }

  readonly checkoutForm$: BehaviorSubject<any> = new BehaviorSubject<any>({});


}
