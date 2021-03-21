import { Component, OnInit ,OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {JwtService} from '../../services/jwt.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdersService } from '../../services/orders.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,OnDestroy {

  constructor(public JwtService:JwtService,   private modalService: NgbModal, public OrdersService:OrdersService,
    private router: Router) { }
  ngOnDestroy(): void {
    if(this.subscriber)
      this.subscriber.unsubscribe();
    if(this.subscriber2)
      this.subscriber2.unsubscribe();
  }
    title = 'appBootstrap';
    closeResult: string;

    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        console.log(content)
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    err
    subscriber
    res

    myForm = new FormGroup({
      username:new FormControl(``,[Validators.required,Validators.minLength(3),Validators.maxLength(100)]),
      email:new FormControl('',[Validators.required,Validators.email]),
    
    })
    user
  ngOnInit(): void {
    console.log(localStorage.getItem("access_token"))
    this.getMyProfile();
    this.getOrders();
  }
 
 y

  getMyProfile(){
    let sub =  this.JwtService.myProfile()
    .subscribe((response)=>{
    this.res=response;
    this.user = this.res.user
    this.JwtService.user  = this.user; 

    },
    (err)=>{
 console.log(err)
    })
  }

  updateMyProfile(){
    console.log(this.myForm.value)
    let sub =  this.JwtService.updateUser(this.myForm.value)
    .subscribe((response)=>{
 console.log(response)
 this.res=response;
 if(this.res.success)
 {
  this.getMyProfile();
   this.JwtService.err=this.res.message
   this.JwtService.succ=""
//   window.location.reload(); 

 }
 else{
  this.getMyProfile();
  this.JwtService.user  = this.res.user; 
  this.JwtService.succ = "your information has been updated Succ";
  this.JwtService.err=""

 // window.location.reload();
 }
    },
    (err)=>{
 console.log(err)
    })
  }

  setDefault() {
    let userDetails = {
      username:this.JwtService.user.username,
      email:this.JwtService.user.email
    };
    this.myForm.patchValue(userDetails)
  }

  deleteUser(){
    let sub =  this.JwtService.deleteUser()
    .subscribe((response)=>{
    console.log(response)
    this.user="";
    this.JwtService.user=""
    localStorage.clear;
    this.router.navigate(['/home'])
},
 (err)=>{
console.log(err)
 })
  }

  subscriber2
  orders
ordersArray=[]
  getOrders(){
    this.subscriber2 =  this.OrdersService.getOrders()
    .subscribe((response)=>{
    this.res = response
  
    this.orders = this.res.orders
    this.ordersArray = this.orders


    },
    (err)=>{
  console.log(err)
    })
  }

}
