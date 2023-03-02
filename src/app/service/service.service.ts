import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';


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

  isLoggin=new BehaviorSubject<boolean>(false)

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
