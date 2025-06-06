import { Component, inject, OnInit } from '@angular/core';
import { user_ } from 'src/app/app.module';
import { User } from 'src/app/Models/User';
import { Users } from 'src/app/Services/Users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{

  selectedUser:User;
  user_service=inject(user_);

  ngOnInit(){
    this.user_service.showTheUser.subscribe((data)=>{
      this.selectedUser=data;
      console.log(this.selectedUser);
      
    });
  }
}
