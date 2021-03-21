import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  NumberOfItem
  card
  constructor() { 
    if(!localStorage.getItem("card")){
      localStorage.setItem("card",JSON.stringify([]));
    }

    if(localStorage.getItem("card")){
      this.card=JSON.parse(localStorage.getItem("card"));
      this.NumberOfItem = new BehaviorSubject<number>(this.card.length)
    }
  
    console.log(localStorage.getItem("card"));
    console.log(this.card);
    
  }
  ngOnInit(): void {
    
  }
  // add id to card
  addTocart(id){
    this.card.push(id);
    localStorage.setItem("card",JSON.stringify(this.card));
    console.log(localStorage.getItem("card"));
    console.log(this.card);
    this.NumberOfItem.next(this.card.length);
  }
// remove id from card
  removeFromCart(id){
    this.card=JSON.parse(localStorage.getItem("card"));
    this.card.forEach((item,i)=>{
      // console.log(item);
      if(id==item){ 
        this.card.splice(i,1);
        console.log(this.card);
      }
    })
    localStorage.setItem("card",JSON.stringify(this.card));
    console.log(localStorage.getItem("card"));
     console.log(this.card);
     this.NumberOfItem.next(this.card.length);
  }

  // get all card products
  getcart(){
    this.card=JSON.parse(localStorage.getItem("card"));
    return this.card;
  }
  // get number of product in card
  get getNumberOfItemINcart(){
    this.card=JSON.parse(localStorage.getItem("card"));
    // return this.card.length;
    return this.NumberOfItem.asObservable();
  }


}
