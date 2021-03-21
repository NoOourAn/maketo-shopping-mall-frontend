import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {
  constructor(private route:Router){} 
  
  	search(){
		this.route.navigate(['/readmore']); // navigate to other page
	}

 

  ngOnInit(): void {
  }

}
