import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.scss']
})
export class RedComponent implements OnInit {
  
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
