import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
userId:any;
  constructor(private http:HttpClient) { 
    this.userId=sessionStorage.getItem('id');
    
  }
  _url = 'https://dummyjson.com/auth/users';
  
  getSingleUser(){
   
   return this.http.get(this._url+"/"+this.userId);
  }

}
