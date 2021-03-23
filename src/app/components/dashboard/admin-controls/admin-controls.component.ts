import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../../services/jwt.service';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-admin-controls',
  templateUrl: './admin-controls.component.html',
  styleUrls: ['./admin-controls.component.css']
})
export class AdminControlsComponent implements OnInit {

  constructor(private adminService:AdminService,private jwtService:JwtService) { }

  res
  admin

  ngOnInit(): void {
    this.getAdminProfile()
  }
  showProducts(){
    this.adminService.setFlag(0) ///to update the sibling (admin display component) with products
  }
  showOrders(){
    this.adminService.setFlag(1) ///to update the sibling (admin display component) with orders
  }
  showUsers(){
    this.adminService.setFlag(2) ///to update the sibling (admin display component) with users
  }

  getAdminProfile(){
    let sub =  this.jwtService.myProfile()
    .subscribe((response)=>{
      this.res=response;
      this.admin = this.res.user
    },
    (err)=>{
      console.log(err)
    })
  }
}
