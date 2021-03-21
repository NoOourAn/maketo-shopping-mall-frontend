import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from '../../../services/admin.service';
import { JwtService } from '../../../services/jwt.service';
import { OrdersService } from '../../../services/orders.service';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-admin-display',
  templateUrl: './admin-display.component.html',
  styleUrls: ['./admin-display.component.css']
})
export class AdminDisplayComponent implements OnInit,OnDestroy {

  constructor(
    private adminService:AdminService,
    private productService:ProductsService,
    private orderService:OrdersService,
    private userService:JwtService,
    private modalService: NgbModal
    ) { }

  products=[]
  users=[]
  orders=[]
  ///
  subscriber
  res
  ///
  flag
  ///error
  errorMsg
  successMsg

  ngOnInit(): void {
    this.flag = -1
    this.getFlag();
  }

  getFlag(){
    this.subscriber = this.adminService.flagObservable
    .subscribe((value)=>{
      this.res = value
      ///not working
      this.flag = (this.res) ? this.res : 0;
      if( this.flag == 0 ){
        this.getProducts();        
      }
      if( this.flag == 1 ){
        this.getOrders();
      }
      if( this.flag == 2 ){
        this.getUsers();
      }
      
    },
    (err)=>{
      console.error(err.message)
    })
  }
/////get products
  getProducts(){
    this.subscriber =  this.productService.getProducts()
   .subscribe((response)=>{
    this.res = response
    console.log(this.res.products)
    if(this.res.success)
      this.products = this.res.products
    else
      this.errorMsg = this.res.message
   },
   (err)=>{
 console.log(err)
   })
  }

  /////get orders
  getOrders(){
    this.subscriber =  this.orderService.getOrders()
   .subscribe((response)=>{
    this.res = response
    if(this.res.success)
      this.orders = this.res.orders
    else
      this.errorMsg = this.res.message
   },
   (err)=>{
    console.log(err)
   })
  }

  /////get users
  getUsers(){
    this.subscriber =  this.userService.AllUsers()
    .subscribe((response)=>{
    this.res = response
    if(this.res.success)
      this.users = this.res.users
    else
      this.errorMsg = this.res.message
    },
    (err)=>{
    console.log(err)
    })
  }

  ///delete product
  deleteProduct(id){
    this.productService.deleteProduct(id)
    .subscribe((response)=>{
      this.res = response
      if(this.res.success){
        this.getProducts()
        this.successMsg = this.res.message
      }
      else
        this.errorMsg = this.res.message
    },
    (err)=>{
      console.log(err)
    })
  }
  ////delete order
  deleteOrder(id){
    this.orderService.deleteOrder(id)
    .subscribe((response)=>{
      this.res = response
      if(this.res.success){
        this.getOrders()
        this.successMsg = this.res.message
      }
      else
        this.errorMsg = this.res.message
    },
    (err)=>{
      console.log(err)
    })
  }

  
  ///update product
  updateProduct(id){

  }

    ///change status modal
    closeResult = '';
    openEditStatusModal(content,id) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        ///if he hit submit
        this.updateOrderState(id);
      }, (reason) => {
        ///if he hit anything else
        console.log("closed:",reason)
      });
    }


    ////change status form
    ChangeStatusForm = new FormGroup({
      status:new FormControl("pending",[
        Validators.required
      ])
    })
  ///update order state
  updateOrderState(id){
    // console.log(id)
    // console.log(this.ChangeStatusForm.value.status)
    this.orderService.modifyOrderStatus(id,this.ChangeStatusForm.value.status)
    .subscribe((response)=>{
      this.res = response
      if(this.res.success)
        this.getOrders()
      else
        this.errorMsg = this.res.message
    },
    (err)=>{
      console.log(err)
    })
  }



  ngOnDestroy(): void {
    if(this.subscriber)
      this.subscriber.unsubscribe();
  }

}
