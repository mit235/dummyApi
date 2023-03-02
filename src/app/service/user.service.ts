import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  searchmember=new Subject()

  constructor(private http:HttpClient) { }
  _url = 'https://dummyjson.com/auth/users';

  getAllUsers(){
    return this.http.get(this._url);
  }
  searchData(searchTerm: string) {
    return this.http.get(`${this._url}/search?q=${this.searchmember}`);
  }
}
