import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.CartDetails();
  }

  getCartDetails:any=[];
  CartDetails(){
    if(localStorage.getItem('localCart'))
    {
this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');
console.log(this. getCartDetails);
  }

}
}