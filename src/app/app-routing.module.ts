import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatetaskComponent } from './createtask/createtask.component';
import { LoginComponent } from './login/login.component';
import { RestaurantDashComponent } from './restaurant-dash/restaurant-dash.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  {
    path : '' , redirectTo : 'login', pathMatch : 'full'
  },
 {
   path : 'login' , component:LoginComponent
 },
 {
   path:'singup' ,component:SingUpComponent
 },
 {
   path : 'restaurant' , component:RestaurantDashComponent
 },
 {path:'createTask' ,component:CreatetaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
