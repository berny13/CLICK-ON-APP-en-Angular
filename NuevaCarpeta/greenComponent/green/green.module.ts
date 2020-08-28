import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreenComponent } from './green.component';



@NgModule({
  declarations: [GreenComponent],
  imports: [
    CommonModule
  ],
  exports: [GreenComponent]
})
export class GreenModule { }
