import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvailabilityComponent } from './views/availability/availability.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: 'availability', component: AvailabilityComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
