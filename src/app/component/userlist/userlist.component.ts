import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  userList:any;
  constructor(private service:UserService,private router:Router){
    this.service.getAllUsers().subscribe((res:any)=>{
      console.log(res)
      this.userData=res;
      this.userList=res['users']
    })
    
  }

  

  userData:any;

}
