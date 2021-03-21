import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  
  constructor(public productSercice:ProductsService, private myActivatedRoute:ActivatedRoute) { }
  

  ngOnInit(): void {
  }
}
