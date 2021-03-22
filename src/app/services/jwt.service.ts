import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
providedIn: 'root'
})

export class JwtService {
    constructor(private httpClient: HttpClient) { }
    
    login(user) {
      console.log(user.username,user.password);
      let username=user.username;
      let password=user.password;
      return this.httpClient.post(`${environment.api}/api/users/login`, {username,password});
 
  }
   user
   err
   succ
  register(user,image) {
    console.log(user)
    var formData = new FormData()
    formData.append('file',image);
    formData.append('username',user.username);
    formData.append('email',user.email);
    formData.append('password',user.password);
    formData.append('gender',user.gender);

    return this.httpClient.post(`${environment.api}/api/users/reg`, formData)
  }

  AllUsers(){
    return  this.httpClient.get(`${environment.api}/api/users/getUsers`)
  }
  myProfile(){
    let headers = new HttpHeaders();
    headers = headers.set('access_token', localStorage.getItem("access_token"))
    return  this.httpClient.get(`${environment.api}/api/users/myProfile`,{headers:headers})
  }
   updateUser(user){
    let headers = new HttpHeaders();
    headers = headers.set('access_token', localStorage.getItem("access_token"))
    return  this.httpClient.patch(`${environment.api}/api/users/profileUpdate`,user,{headers:headers})
  }

  updateProfileImage(image){
    let headers = new HttpHeaders();
    headers = headers.set('access_token', localStorage.getItem("access_token"))
    ///sending image as a file
    var formData = new FormData()
    formData.append('file',image);

    return  this.httpClient.patch(`${environment.api}/api/users/imgUpdate`,formData,{headers:headers})
  }
  
  deleteUser(){
    let headers = new HttpHeaders();
    headers = headers.set('access_token', localStorage.getItem("access_token"))
    return  this.httpClient.delete(`${environment.api}/api/users/profileDelete`,{headers:headers})
  }


logout() {
  localStorage.removeItem('access_token');
  if(localStorage.getItem('admin'))
    localStorage.removeItem('admin');
}
public get loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null 
         && localStorage.getItem('admin') ==  null;
}
public get admin(): boolean{
  return  localStorage.getItem('access_token') !==  null
          && localStorage.getItem('admin') !==  null;
}
}

