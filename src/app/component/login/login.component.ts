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

  constructor(private service:ServiceService,private router:Router){}

loginUser(form:NgForm){
  console.log(form.value);
  this.service.loginUser(form.value).subscribe(res=>{
    console.warn(res);
    sessionStorage.setItem('token',res.token);
    this.router.navigate(['/userlist']);
  },err=>{alert('something went wrong..')})

}

}
 