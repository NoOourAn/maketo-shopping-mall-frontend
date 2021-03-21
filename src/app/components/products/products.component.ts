import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {

  products
  subscriber
  subscriberByID
  productsArray =[]

  // authorization
  isLoggedIn: Observable<boolean>;

  constructor(
    private productSercice:ProductsService,
    private authService: AuthService,
    private cartService:CartService ,
    private route:Router
    )
    {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.getProducts();
    }
    onLogout(){
      this.authService.logout();                      
    }
    getProducts(){
      this.subscriber =  this.productSercice.getProducts()
     .subscribe((response)=>{
        //  console.log(response);
        this.products = response
        this.productsArray = this.products.products
        //  for(let i=0;i<this.products.length;i++){
        //    this.productsArray.push(this.products[i])
        //  }
        console.log(this.productsArray);
     },
     (err)=>{
        console.log(err)
     })
    }

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
  // add porduct to cart
  addTocart(id){
    this.cartService.addTocart(id)
  }
  ngOnDestroy(): void {
    if(this.subscriber)
      this.subscriber.unsubscribe();
  }
}
