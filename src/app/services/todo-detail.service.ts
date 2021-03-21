import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HelperService } from './helper.service'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoDetailService {

  constructor(private myClient:HttpClient,private helper:HelperService) { }

  ////variables
  private baseUrl:string = `${environment.api}/api/todos`;
  res

  private todo = new Subject<object>();
  TodoDetail = this.todo.asObservable();

  getTodoDetail(todoid){
    const url = this.baseUrl + `/${todoid}`;
    const header = this.helper.setHeaders()

    this.myClient.get(url,header)
    .subscribe((response)=>{
      this.res=response
      if(this.res.success)
        this.todo.next(this.res.todo)
    },
    (err)=>{
      console.error(err.message)
    })
  }
  clearTodoDetail(){
    this.todo.next()
  }

}
