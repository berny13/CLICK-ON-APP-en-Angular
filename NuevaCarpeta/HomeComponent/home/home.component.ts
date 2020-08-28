import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blueTitle = "Hola desde <app-blue>";
  redTitle = "Hola desde <app-red>";
  greenTitle = "Hola desde <app-green>";

  blueClicks: number;
  greenClicks: number;
  redClicks: number;

  constructor() { }

  ngOnInit(): void {
  }

  onBlueClick(click: number){
    this.blueClicks = click;
  }

  onRedClick(click: number){
    this.redClicks = click;
  }

  onGreenClick(click: number){
    this.greenClicks = click;
  }

  reset(){
    this.blueClicks = 0;
    this.greenClicks = 0;
    this.redClicks = 0;
  }



}
