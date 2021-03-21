import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-slider-brief',
  templateUrl: './slider-brief.component.html',
  styleUrls: ['./slider-brief.component.css']
})
export class SliderBriefComponent implements OnInit {

  constructor(private route:Router){} 
  
  buynow(){
  this.route.navigate(['/buynow']);
}

  ngOnInit(): void {
  }

}
