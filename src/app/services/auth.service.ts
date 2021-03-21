import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject} from 'rxjs';
import {HttpClient } from '@angular/common/http';
import { JwtService } from './jwt.service';


@Injectable(
  {
    providedIn: 'root',
   }
)
export class AuthService{
  
  private loggedIn = new BehaviorSubject<boolean>(false); 
  private admin = new BehaviorSubject<boolean>(false); 
  get isLoggedIn() {
    this.login()
    console.log(this.loggedIn);
    return this.loggedIn.asObservable(); 
  }

  get isAdmin() {
    this.loginAsAdmin();
    return this.admin.asObservable(); 
  }

  constructor(
    private router: Router,private httpClient: HttpClient, private jwtService:JwtService,
) {}
  
  login(){
  
    if (this.jwtService.loggedIn ) {
      this.loggedIn.next(true);
    
    }
  }

  loginAsAdmin(){
    if (this.jwtService.admin ) {
      this.admin.next(true);
      
    }
  }


  logout() {       
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
 
