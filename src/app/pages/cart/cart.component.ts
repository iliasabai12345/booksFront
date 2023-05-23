import {Component, OnInit} from '@angular/core';
import {CartService} from "src/app/pages/cart/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private readonly cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getCartProducts().subscribe(books => {
      console.log(books);
    })
  }
}
