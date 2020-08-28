import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedComponent } from './red.component';



@NgModule({
  declarations: [RedComponent],
  imports: [
    CommonModule
  ],
  exports: [RedComponent]
})
export class RedModule { }
