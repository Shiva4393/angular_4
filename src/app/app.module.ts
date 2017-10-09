import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CustomMaterialModule } from './custom-material/custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

/*import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './login/in-memory-login-data.service';*/

import { LoginService } from './login/login.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { RegisterComponent } from './login/register/register.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    PageNotFoundComponent,
    DashboardComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
