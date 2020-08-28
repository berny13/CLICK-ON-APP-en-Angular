import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.scss']
})
export class GreenComponent implements OnInit {
  
  @Input() title: string;
  @Output() clickEvt = new EventEmitter<number>();

private clicks = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clicks++;
    this.clickEvt.emit(this.clicks)
  }


}
