import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpProviderService } from './services/http-provider.service';

import { CustomMaterialModule } from './custom-material/custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LoginService } from './services/login.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { RegisterComponent } from './login/register/register.component';

import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    PageNotFoundComponent
    //RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpProviderService,
      multi: true,
    },
    /*{
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    },*/ LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
