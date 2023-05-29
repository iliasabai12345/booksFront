import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {toast} from "shared/functions/toast";
import {BooksInfoComponent} from "src/app/modals/books-info/books-info.component";
import {OrdersService} from "src/app/pages/orders/orders.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  constructor(private readonly ordersService: OrdersService,
              private readonly dialog: MatDialog) {
  }

  orders: any = [];

  ngOnInit() {
    this.ordersService.getOrders().subscribe(res => {
      console.log(res);
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
}
