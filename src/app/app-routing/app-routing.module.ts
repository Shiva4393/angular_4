import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { ForgotPasswordComponent } from '../login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../login/reset-password/reset-password.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
/*import { RegisterComponent } from '../login/register/register.component';*/

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password/:id/:token', component: ResetPasswordComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/login' }
  /*{ path: 'register', component: RegisterComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
