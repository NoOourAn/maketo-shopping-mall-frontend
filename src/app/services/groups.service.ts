import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HelperService } from './helper.service'

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private myClient:HttpClient,private helper:HelperService) { }
  private baseUrl:string = `${environment.api}/api/groups`;
  ////////
  getGroups(){
    const header = this.helper.setHeaders()
    return this.myClient.get(this.baseUrl,header)
  }
  ////////
  addGroup(group){
    const header = this.helper.setHeaders()
    return this.myClient.post(this.baseUrl,group,header)
  }
  ////////
  deleteGroup(id){
    const url = this.baseUrl + `/${id}`
    const header = this.helper.setHeaders()
    return this.myClient.delete(url,header)
  }
  
}
