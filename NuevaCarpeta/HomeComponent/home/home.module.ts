import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BlueModule } from '../blue/blue.module';
import { GreenModule } from '../green/green.module';
import { RedModule } from '../red/red.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BlueModule,
    GreenModule,
    RedModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
