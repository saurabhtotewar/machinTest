import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./landing/users/users.component";
import {OrdersComponent} from "./landing/orders/orders.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'orders', component: OrdersComponent },
  {path : '', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




export const routing = RouterModule.forRoot(routes);
