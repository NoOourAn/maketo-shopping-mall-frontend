import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myClient:HttpClient, private router: Router) { }

  private baseUrl:string = `${environment.api}/api/users`;
  addUser(user){
    const url = this.baseUrl + "/register"
    return this.myClient.post(url,user);  ///it returns obsevable i need to subscribe on it to get the response
  }
  signInUser(user){
    const url = this.baseUrl + "/login"
    return this.myClient.post(url,user)  ///it returns observable i need to subscribe on it
  }
  logoutUser(){
    localStorage.clear()
    this.router.navigate(['./login'])
  }
  
}
