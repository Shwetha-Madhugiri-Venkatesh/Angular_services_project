import { Component, inject } from '@angular/core';
import { Subscribe } from 'src/app/Services/Subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  // constructor(private subscribe:Subscribe){

  // }

  subscribe=inject(Subscribe);
  onSubscribe(){
    this.subscribe.onSubscribe_click("Yearly");
  }
}
