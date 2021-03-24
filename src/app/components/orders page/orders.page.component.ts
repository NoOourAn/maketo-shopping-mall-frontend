import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrdersService } from '../../services/orders.service';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-details',
  templateUrl: './orders.page.component.html',
  styleUrls: ['./orders.page.component.css']
})

export class OrdersComponent implements OnInit {

  cart:any;
  productsArray =[];
  response;
  totalPrice=0;
  orderProducts=[];  
  products=[]



  constructor(private route:Router,private orderService:OrdersService,private cartService:CartService,private productSercice:ProductsService){} 
  ngOnInit(): void {
    this.fillCartArray()
    this.getProductsInCart();
  }
  getProductsInCart() {
    this.totalPrice = 0;
    this.productsArray=[];
    if(this.cart.length!=0){
      console.log(this.cart);
      this.cart.forEach(id=> {
      this.productSercice.getProductsByID(id).subscribe(res=>{
        this.response=res;
        console.log(this.response)
        this.products = this.response.products
        
        this.totalPrice+=this.products[0].price;
        this.productsArray.push(this.products[0]);
      })
    });
    console.log("total price",this.totalPrice);
    console.log(this.productsArray);
    this.orderService.setCart(this.productsArray);
  }
  }
  fillCartArray() {
    if(localStorage.getItem("card")){
      this.cart=this.cartService.getcart();
      console.log(this.cart);
    }
  }
  receipt(){
    let item;
    this.productsArray.forEach(product=>{
         item={"productName":product.name,"quantity":"1"}
        this.orderProducts.push(item);
      })
      console.log(this.orderProducts);

    this.orderService.createOrders({totalPrice:this.totalPrice,"products":this.orderProducts}).subscribe(res=>{
      this.response=res
      console.log(this.response);
      this.orderService.setOrder(this.response);
      if(localStorage.getItem("card")){

        localStorage.setItem("card",JSON.stringify([]));
      }
       window.location.reload();
    },error=>{
      console.log(error);
      
    })
  }
  
  onRemove(id){
    console.log(id);
    this.cartService.removeFromCart(id);
    this.fillCartArray()
    this.getProductsInCart();
   
  } 

}
