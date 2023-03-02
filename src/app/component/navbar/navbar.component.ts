import { Component } from '@angular/core';
import {ServiceService} from 'src/app/service/service.service'
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private service:ServiceService,private searchservice:UserService){}
  isNavbar=true;
  isAdmin=true;
  isLoggin=this.service.isLoggin.subscribe((res:any)=>{
    this.isLoggin=res
  });
  searchTerm = '';
  searchResults = [];
  search(data:any) {
    this.searchservice.searchData(data).subscribe((results: any) => {
      this.searchResults = results;
      // console.warn(this.searchResults);
      this.searchservice.searchmember.next(this.searchResults);
      console.log(results);
    });

    console.log(data)
  }

}
