import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListenerService {
  readonly cartCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
}
