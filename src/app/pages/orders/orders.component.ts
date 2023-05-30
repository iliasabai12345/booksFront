import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {toast} from "shared/functions/toast";
import {translates} from "shared/i18n/lng/languages";
import {ListenerService} from "shared/services/listener.service";
import {BooksInfoComponent} from "src/app/modals/books-info/books-info.component";
import {OrdersService} from "src/app/pages/orders/orders.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  constructor(private readonly ordersService: OrdersService,
              private readonly dialog: MatDialog,
              private readonly listenerService: ListenerService) {
  }

  orders: any = [];
  translates: any;

  ngOnInit() {
    this.listenerService.currentLng$.subscribe(res => {
      // @ts-ignore
      this.translates = translates[res];
    })

    this.ordersService.getOrders().subscribe(res => {
      if (res.code === 0) {
        this.orders = res.data;
      } else {
        toast('error', 'oops')
      }
    })
  }

  openBooksModal(order: any): void {
    const dialogRef = this.dialog.open(BooksInfoComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '450px',
      maxHeight: '600px',
      data: {
        books: order.products
      }
    });
  }

  cancelOrder(order: any) {
    const body = order;
    body.order_status = 'отменен';
    this.ordersService.updateOrder(body).subscribe(res => {
      if (res.code === 0) {
        order = res.data
        toast('success', res.message);
      } else {
        toast('error', 'error');
      }
    })
  }
}
