import { Component } from '@angular/core';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  userData: any;
  constructor(private service: ProfileService) {
    this.service.getSingleUser().subscribe(
      (res) => {console.warn(res)
      this.userData=res;
      
      },(error) => console.warn('error from profile')
    );
  }
}
