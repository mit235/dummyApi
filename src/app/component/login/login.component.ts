import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {ServiceService} from 'src/app/service/service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service:ServiceService,private router:Router){
    sessionStorage.clear();
    this.service.isLoggin.next(false)
  }

loginUser(form:NgForm){
  console.log(form.value);
  this.service.loginUser(form.value).subscribe(res=>{
    console.warn(res);
    sessionStorage.setItem('token',res.token);
    sessionStorage.setItem('user',JSON.stringify(res));
    sessionStorage.setItem('id',res.id);
    this.service.isLoggin.next(true)
    this.router.navigate(['/userlist']);
  },err=>{alert('something went wrong..')})

}

}
 