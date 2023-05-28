import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {StorageService} from "shared/services/storage.service";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private readonly storageService: StorageService,
              private readonly httpClient: HttpClient) {
  }
  order$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  readonly step$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  readonly products$: BehaviorSubject<any> = new BehaviorSubject({});
  readonly userForm$: BehaviorSubject<any> = new BehaviorSubject<any>({});
  readonly pay_type$: BehaviorSubject<any> = new BehaviorSubject<any>({
    pay_type: null
  })

  // statuses / 'оформлен' / 'доставляется' / 'ожидает клиента' / 'отменен' / 'доставлен'
  mergeForms() {
    const body = {
      user_id: this.storageService.user._id,
      date: new Date(),
      time: Date.now(),
      ...this.products$.getValue(),
      ...this.userForm$.getValue(),
      ...this.pay_type$.getValue(),
      order_status: 'оформлен'
    }
    return this.setOrder(body);
  }

  setOrder(body: any): Observable<any> {
    return this.httpClient.post('api/orders/addOrder', body)
  }

  resetForm() {
    this.products$.next({});
    this.userForm$.next({});
    this.pay_type$.next({});
  }
}
