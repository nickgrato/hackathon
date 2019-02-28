import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login';
import { DashComponent } from './dash';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
