import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { ProductsService } from '../../../services/products.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  cart
  
  products
  products2
  subscriber
  subscriber1
  subscriberByID
  productsArray =[]
  lowPriceProducts = [];


  constructor(private route:Router,private cartService:CartService,private productSercice:ProductsService,private authService: AuthService) { }
  

  Pid
  getSpecificProductById(id){
    let sub =  this.productSercice.getProductsByID(id)
    .subscribe((response)=>{
 console.log(response)
 this.Pid=response;
 this.productSercice.productDetail  = this.Pid;
 this.route.navigate([`/products/${id}`]);
    },
    (err)=>{
 console.log(err)
    })
  }



  details(){
		this.route.navigate(['/details']);
	}
  ngOnInit()  {
  this.cart=this.cartService.getcart();
    console.log(this.cart);
    this.getnewProducts();
    this.getlowpriceProducts();

  }

  addTocart(id){
    this.cartService.addTocart(id)
  }



  getnewProducts(){
    this.subscriber =  this.productSercice.getProductsBylatestdate()
   .subscribe((response)=>{
 console.log(response);
 this.products = response
 if (this.products.products.length<3)
 {
  for(let i=0;i<this.products.products.length;i++){
    this.productsArray.push(this.products.products[i])
  }
 }
 else
 {
  for(let i=0;i<4;i++){
    this.productsArray.push(this.products.products[i])
  }
 }

 console.log( this.productsArray  );

  this.subscriber.unsubscribe();
   },
   (err)=>{
 console.log(err)
   })
  }


  getlowpriceProducts(){
    this.subscriber1 =  this.productSercice.getProductsByminPrice()
   .subscribe((response)=>{
 console.log(response);
 this.products2 = response
 if (this.products2.products.length<3)
 {
  for(let i=0;i<this.products2.products.length;i++){
    this.lowPriceProducts.push(this.products2.products[i])
  }
 }
 else
 {
  for(let i=0;i<4;i++){
    this.lowPriceProducts.push(this.products2.products[i])
  }
 }

 console.log( this.lowPriceProducts  );

  this.subscriber1.unsubscribe();
   },
   (err)=>{
 console.log(err)
   })
  }

}
