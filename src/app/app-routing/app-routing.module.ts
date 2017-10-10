import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { ForgotPasswordComponent } from '../login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../login/reset-password/reset-password.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
/*import { RegisterComponent } from '../login/register/register.component';
import { DashboardComponent } from '../dashboard/dashboard.component';*/

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password/:id', component: ResetPasswordComponent },
  { path: '**', component: PageNotFoundComponent},
  /*{ path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
