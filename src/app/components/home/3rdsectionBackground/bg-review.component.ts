import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-bg-review',
  templateUrl: './bg-review.component.html',
  styleUrls: ['./bg-review.component.css']
})
export class BgReviewComponent implements OnInit {

  constructor(private route:Router){} 
  
  buynow(){
  this.route.navigate(['/products']);
}

  ngOnInit(): void {
  }

}
