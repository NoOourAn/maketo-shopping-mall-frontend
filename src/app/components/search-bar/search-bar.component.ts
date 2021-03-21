import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import {Router} from '@angular/router';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private ProductsService:ProductsService,private route:Router,  private cartService:CartService ,) { }

  sub 
  prod
   
  myForm = new FormGroup({
    searchby:new FormControl('',[Validators.required]),
    body:new FormControl('',[Validators.required])
  })

  ngOnInit(): void {

  }


  Pid
    getSpecificProductById(id){
      let sub =  this.ProductsService.getProductsByID(id)
      .subscribe((response)=>{
   console.log(response)
   this.Pid=response;
   this.ProductsService.productDetail  = this.Pid;
   this.route.navigate([`/products/${id}`]);
      },
      (err)=>{
   console.log(err)
      })
    }
  
  search(myForm){
     console.log("aho biedkhol ahoooooooooooooooooooooooooooooooooooooooooooooo")
     console.log(myForm.value)
   
   if (myForm.value.searchby == "name")
   {
    let sub =  this.ProductsService.getProductsByName(this.myForm.value.body)
    .subscribe((response)=>{
 console.log(response)
 this.prod=response;
 this.prod = this.prod.products
 this.ProductsService.productsSearch = this.prod;
 //window.location.reload(); 
 
    },
    (err)=>{
 console.log(err)
    })

   }
   if (myForm.value.searchby == "category")
   {
    let sub =  this.ProductsService.getProductsByCategory(this.myForm.value.body)
    .subscribe((response)=>{
 console.log(response)
 this.prod=response;
 this.prod = this.prod.products
 this.ProductsService.productsSearch  = this.prod;
 //window.location.reload(); 
 
    },
    (err)=>{
 console.log(err)
    })

     
   }
   if (myForm.value.searchby == "brand")
   {
      console.log(this.myForm.value.body)
    let sub =  this.ProductsService.getProductsByBrand(this.myForm.value.body)
    .subscribe((response)=>{
 console.log(response)
 this.prod=response;
 this.prod = this.prod.products
 this.ProductsService.productsSearch  = this.prod;
 //window.location.reload(); 
 
    },
    (err)=>{
 console.log(err)
    })

     
   }
   if (myForm.value.searchby == "highPrice")
   {
    let sub =  this.ProductsService.getProductsBymaxPrice()
    .subscribe((response)=>{
 console.log(response)
 this.prod=response;
 this.prod = this.prod.products
 this.ProductsService.productsSearch   = this.prod;
// window.location.reload(); 
 
    },
    (err)=>{
 console.log(err)
    })

     
   }
   if (myForm.value.searchby == "LowPrice")
   {
    let sub =  this.ProductsService.getProductsByminPrice()
    .subscribe((response)=>{
 console.log(response)
 this.prod=response;
 this.prod = this.prod.products
 this.ProductsService.productsSearch  = this.prod;
 
 //window.location.reload(); 
 
    },
    (err)=>{
 console.log(err)
    })

     
   }
   if (myForm.value.searchby == "NewDate")
   {
    let sub =  this.ProductsService.getProductsBylatestdate()
    .subscribe((response)=>{
 console.log(response)
 this.prod=response;
 this.prod = this.prod.products
 this.ProductsService.productsSearch  = this.prod;
 //window.location.reload(); 
    },
    (err)=>{
 console.log(err)
    })
   }
   if (myForm.value.searchby == "OldDate")
   {
    let sub =  this.ProductsService.getProductsByoldestdate()
    .subscribe((response)=>{
 console.log(response)
 this.prod=response;
 this.prod = this.prod.products
 this.ProductsService.productsSearch  = this.prod;
// window.location.reload(); 
    },
    (err)=>{
 console.log(err)
    })

   }
  }


  addTocart(id){
   this.cartService.addTocart(id)
 }
  }

