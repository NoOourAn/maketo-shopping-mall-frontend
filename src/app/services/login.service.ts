import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isloggedin : boolean;
    constructor(private _http: HttpClient){
        this.isloggedin = false;
    }
}
