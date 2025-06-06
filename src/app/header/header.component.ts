import { Component } from '@angular/core';
import { Subscribe } from '../Services/Subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedTab:string='home';

  constructor(private subcribe:Subscribe){

  }

  HomeClicked(){
    this.selectedTab='home';
  }

  AdminClicked(){
    this.selectedTab='admin';
  }

  onSubscribe(){
    this.subcribe.onSubscribe_click("monthly");
  }
}
