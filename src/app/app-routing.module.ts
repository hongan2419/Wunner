import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RegisterEventComponent } from './register-event/register-event.component';
import { EventListComponent } from './event-list/event-list.component';


const routes: Routes = [
  {path: '*', component: EventListComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register-event', component: RegisterEventComponent},
  {path: 'event-list', component: EventListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
