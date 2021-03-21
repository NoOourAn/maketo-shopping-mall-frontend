import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-admin-controls',
  templateUrl: './admin-controls.component.html',
  styleUrls: ['./admin-controls.component.css']
})
export class AdminControlsComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
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
}
