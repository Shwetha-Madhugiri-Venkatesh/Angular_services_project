import { Component, Inject } from '@angular/core';
import { user_ } from 'src/app/app.module';
import { Users } from 'src/app/Services/Users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  name:string='';
  gender:string='';
  category:string='';
  status:string='';

  constructor(@Inject(user_) private users_service:Users){

  }

  add_user(){
    this.users_service.add(this.name,this.gender,this.category,this.status);
    console.log(this.users_service.users);
  }
}
