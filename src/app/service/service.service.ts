import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'


export interface Authentication{
  id:number;
  username:string,
  email:string,
  firstName:string,
  gender: string,
  token:string
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  loginUser(data:any){
    let username=data.username;
    let password=data.password;
    return this.http.post<any>("https://dummyjson.com/auth/login",{username,password})
  }
  getToken(){
    return sessionStorage.getItem('token') != null? sessionStorage.getItem('token'):'';
  }
}
