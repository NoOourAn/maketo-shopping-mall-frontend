import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class receiptComponent implements OnInit {

  cart
  order
  response
  constructor(private orderService:OrdersService) { }

  ngOnInit(): void {

    this.cart=this.orderService.getCart()
    this.order=this.orderService.getOrder()
    console.log(this.cart)
    console.log(this.order)
   
  console.log(this.cart);
  console.log(this.order)

  }

}
