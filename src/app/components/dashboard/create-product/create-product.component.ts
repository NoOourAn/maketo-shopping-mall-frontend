import { Component, OnInit,OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit ,OnDestroy{

  constructor(private productService:ProductsService,private router:Router) {}

 
  ngOnInit(): void {
    
  }
  errorMsg
  subscriber
  res
  newProduct
  ////create product form
  CreateProductForm = new FormGroup({
    productName:new FormControl("",[
      Validators.minLength(1),
      Validators.maxLength(100),
      Validators.required
    ]),
    desc:new FormControl("",[
      Validators.minLength(1),
      Validators.maxLength(500),
    ]),
    category:new FormControl("",[
      Validators.minLength(1),
      Validators.maxLength(50),
      Validators.required
    ]),
    brand:new FormControl("",[
      Validators.minLength(1),
      Validators.maxLength(50),
      Validators.required
    ]),
    numInStock:new FormControl("",[
      Validators.required
    ]),
    price:new FormControl("",[
      Validators.required
    ]),
    img:new FormControl(),
  })

  uploadedFile
  ////i do it manually cuz ngModel doesn't work with input[type="file"]
  /// so i have to create my own directive
  fileChange(element) {
    if (element.target.files.length > 0)
      this.uploadedFile = element.target.files[0];
  }
  ///submit creation form 
  createProduct(){
    this.subscriber = this.productService.addProduct(this.CreateProductForm.value,this.uploadedFile)
    .subscribe((response)=>{
      this.res = response
      if(this.res.success){
        this.CreateProductForm.reset()
        this.router.navigate(['dashboard'])
      }
      else{
        this.errorMsg = this.res.message
        console.log(this.res.message) 
      }
    },
    (err)=>{
      console.log(err)
    })
  }
  ///cancel submit form
  cancel(){
    // this.CreateProductForm.reset()
    this.router.navigate(['dashboard'])
  }

  ngOnDestroy(): void {
    if(this.subscriber)
      this.subscriber.unsubscribe();
  }
}
