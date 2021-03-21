
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.isLoggedIn
      .pipe(
        take(1),                             
        map(
          (isLoggedIn: boolean) => {  
          console.log("login",isLoggedIn);      
          if (!isLoggedIn){
            this.router.navigate(['/login']); 
            return false;
          }
          return true;
        })
      )
  }
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
}
