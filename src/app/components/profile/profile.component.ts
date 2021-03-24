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
 if(!this.res.success)
 {
  this.getMyProfile();
  this.JwtService.err="this information is already exists"
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
  logout(){
    this.JwtService.logout()
    this.router.navigate(['/home']);
    localStorage.clear()
     window.location.reload(); 

  }

  deleteUser(){
    let sub =  this.JwtService.deleteUser()
    .subscribe((response)=>{
    console.log(response)
    this.user="";
    this.JwtService.user=""
    localStorage.clear;
    this.logout();
    
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
    console.log(this.ordersArray)


    },
    (err)=>{
  console.log(err)
    })
  }
///////////////update profile image

  errorMsg
  successMsg
  ////i do it manually cuz ngModel doesn't work with input[type="file"]
  /// so i have to create my own directive
  uploadedFile
  fileChange(element) {
    if (element.target.files.length > 0)
      this.uploadedFile = element.target.files[0];
  }
  /////change image form
  ChangeImageForm = new FormGroup({
    image:new FormControl('',[]),
  })
  /////change image modal
  openEditImageModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      /// if he hit submit
      this.updateMyImage()
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  /////change image btn
  updateMyImage(){
    this.subscriber =  this.JwtService.updateProfileImage(this.uploadedFile)
    .subscribe((response)=>{
      console.log(response)
      this.res=response;
      if(this.res.success)
      {
        this.successMsg = "image changed successfully"
        this.getMyProfile();
      }
      else
      {
        this.errorMsg = this.res.message
      }
    },
    (err)=>{
      console.log(err)
    })
  }


}
