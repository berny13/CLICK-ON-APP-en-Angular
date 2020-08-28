import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.scss']
})
export class BlueComponent implements OnInit {
  
  @Input() title: string;
  @Output() clickEvt = new EventEmitter<number>();
  
  clicks = 0;
  url= "https://angular.io/assets/images/logos/angular/angular.svg"
  starClass = "text-right";
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.clicks++;
    this.clickEvt.emit(this.clicks);
  }
}
