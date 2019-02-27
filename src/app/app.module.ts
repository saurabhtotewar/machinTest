import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatTableModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputService, LandingComponent} from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import {FilterPipe, UsersComponent} from './landing/users/users.component';
import { OrdersComponent } from './landing/orders/orders.component';
import {UserService} from "./service/user.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    UsersComponent,
    OrdersComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [InputService, UserService, HttpClient],
  bootstrap: [AppComponent],
  exports: [ FilterPipe ]
})
export class AppModule { }
