import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent implements OnInit {

  constructor(private route:Router){} 
  
  	buynow(){
		this.route.navigate(['/buynow']);
	}
  ngOnInit(): void {
  }

}
