import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {StorageService} from "shared/services/storage.service";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private readonly http: HttpClient,
              private readonly storageService: StorageService) {
  }

  getOrders():Observable<any> {
    const user_id = this.storageService.user._id;
    return this.http.get(`api/orders/getOrders/${user_id}`);
  }
}
