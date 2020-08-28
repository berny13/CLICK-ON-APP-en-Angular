import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
import {HomeModule } from './home/home.module'; 

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    HomeModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
