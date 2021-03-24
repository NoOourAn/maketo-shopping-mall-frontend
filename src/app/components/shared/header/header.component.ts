import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { LoginService } from '../../../services/login.service';
import { JwtService } from '../../../services/jwt.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    noOfcartItem
  constructor(private route:Router,private CartService:CartService,public loginService: LoginService,private JwtService:JwtService){} 
  
  	search(){
		this.route.navigate(['/search']); 
  }
  home(){
		this.route.navigate(['/']);
	}
	aboutus(){
		this.route.navigate(['/aboutus']); 
  }
  products(){
		this.route.navigate(['/products']);
	}
  receipt(){
		this.route.navigate(['/receipt']);
  }
  orderspage()
  {
    this.route.navigate(['/orders']);
  }
  
  blog(){
		this.route.navigate(['/blog']);
  }
  
  login(){
		this.route.navigate(['/login']);
  }
  
  register(){
		this.route.navigate(['/register']);
	}

  isLogin(){
    return this.JwtService.loggedIn
  }
  logout(){
    this.JwtService.logout()
    this.route.navigate(['/home']);
    localStorage.clear()
    window.location.reload();
  }

  ngOnInit(): void {
    this.CartService.getNumberOfItemINcart.subscribe(res=>{
      this.noOfcartItem=res;
      console.log("from cart",res);
    })
    }

}

