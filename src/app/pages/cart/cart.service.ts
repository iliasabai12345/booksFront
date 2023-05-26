import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {StorageService} from "shared/services/storage.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private readonly http: HttpClient,
              private readonly storageService: StorageService) {
  }

  getCartProducts(): Observable<any> {
    const user_Id = this.storageService.user._id;
    return this.http.get(`api/cart/getCart/${user_Id}`)
  }

  deleteProduct(id: string): Observable<any> {
    const user_Id = this.storageService.user._id;
    return this.http.delete(`api/cart/deleteProductOfCart/${id}/${user_Id}`)
  }

  changeProductQty(body:any): Observable<any> {
    return this.http.put(`api/cart/changeProductQty/${body._id}`, body);
  }
}
