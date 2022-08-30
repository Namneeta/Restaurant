import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantDashComponent } from './restaurant-dash/restaurant-dash.component';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { CreatetaskComponent } from './createtask/createtask.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantDashComponent,
    LoginComponent,
    SingUpComponent,
    CreatetaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
