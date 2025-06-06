import { Component, Inject } from '@angular/core';
import { user_ } from 'src/app/app.module';
import { User } from 'src/app/Models/User';
import { Users } from 'src/app/Services/Users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  constructor(@Inject(user_) private user_service:Users){

  }
  users=this.user_service.allUsers;

  onClickPlus(user:User){
    this.user_service.raising_Event(user);
  }
}
