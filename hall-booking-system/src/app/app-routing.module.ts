import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HallListComponent } from './hall-list/hall-list.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'halls', component: HallListComponent },
  { path: 'register', component: RegisterComponent },  
  { path: 'confirm-booking', component: ConfirmBookingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
