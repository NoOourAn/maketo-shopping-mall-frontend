import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  private flag = new Subject<object>();
  flagObservable = this.flag.asObservable();

  setFlag(value){
    this.flag.next(value)
  }
}
