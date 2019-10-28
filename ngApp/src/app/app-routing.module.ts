import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpecialComponent } from './special/special.component';
import { AuthGuard } from './auth.guard';
import { ViewEventsComponent } from './view-events/view-events.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/events',
    pathMatch : 'full'
  },
  {
    path : 'events',
    component : EventsComponent
  },
  {
    path : 'events/:id',
    component : ViewEventsComponent
  },
  {
    path : 'special/:id',
    component : ViewEventsComponent
  },
  {
    path : 'special',
    component : SpecialComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
