import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  
  constructor(private myClient:HttpClient) { }
  
  updateProduct(id,product){
    return this.myClient.put(`https://jsonplaceholder.typicode.com/posts/${id}`,product)
  }
  
  editProduct(id,edit){
    return this.myClient.patch(`https://jsonplaceholder.typicode.com/posts/${id}`,edit)
  }
  deleteProduct(id){
    return this.myClient.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
  ngOnInit(): void {
  }
}
