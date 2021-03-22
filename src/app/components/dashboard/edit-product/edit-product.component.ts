import { Component, OnDestroy, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit,OnDestroy {

  
  constructor(public productService:ProductsService, private myActivatedRoute:ActivatedRoute,private router:Router) { }
  
  id
  ngOnInit(): void {
    this.id = this.myActivatedRoute.snapshot.params.id
    this.getSpecificProductById(this.id)
  }

  product
  subscriber
  res
  errorMsg
  getSpecificProductById(id){
    this.subscriber =  this.productService.getProductsByID(id)
    .subscribe((response)=>{
      console.log(response)
      this.product=response;
      console.log(this.product)
    },
    (err)=>{
      console.log(err)
    })
  }


    ////edit product form
    EditProductForm = new FormGroup({
      productName:new FormControl("",[
        Validators.minLength(1),
        Validators.maxLength(100),
      ]),
      desc:new FormControl("",[
        Validators.minLength(1),
        Validators.maxLength(500),
      ]),
      category:new FormControl("",[
        Validators.minLength(1),
        Validators.maxLength(50),
      ]),
      brand:new FormControl("",[
        Validators.minLength(1),
        Validators.maxLength(50),
      ]),
      numInStock:new FormControl(""),
      price:new FormControl(""),
      img:new FormControl(),
    })
  
    uploadedFile
    ////i do it manually cuz ngModel doesn't work with input[type="file"]
    /// so i have to create my own directive
    fileChange(element) {
      if (element.target.files.length > 0)
        this.uploadedFile = element.target.files[0];
    }
    ///submit updating form 
    editProduct(){
      this.subscriber = this.productService.updateProduct(this.id,this.EditProductForm.value,this.uploadedFile)
      .subscribe((response)=>{
        this.res = response
        if(this.res.success){
          this.EditProductForm.reset()
          this.router.navigate(['dashboard'])
        }
        else{
          this.errorMsg = this.res.message
        }
      },
      (err)=>{
        console.log(err)
      })
    }
    ///cancel submit form
    cancel(){
      this.router.navigate(['dashboard'])
    }
 

  ngOnDestroy(): void {
    if(this.subscriber)
      this.subscriber.unsubscribe
  }
}
