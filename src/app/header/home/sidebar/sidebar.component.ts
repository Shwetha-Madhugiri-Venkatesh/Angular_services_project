import { Component } from '@angular/core';
import { Subscribe } from 'src/app/Services/Subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private subscribe:Subscribe){

  }
  onSubscribe(){
    this.subscribe.onSubscribe_click("Weekly");
  }
}
