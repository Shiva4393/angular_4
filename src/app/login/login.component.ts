import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';

import { LoginService } from '../services/login.service';

declare var App: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginDetails: any = {};
  submit: boolean;
  server_error: string;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  login(form: any): void {
    this.submit = true;
    if (!form.valid) return;
    this.submit = false;
    this.loginService
      .checkLogin(this.loginDetails)
      .then(response => {
        if(response.result.success){
          this.server_error = '';
          this.goToDashboard();
        }
        else{
          this.server_error = response.result.message;
        }
      })
      .catch(error => this.server_error = 'Invalid username and password');
  }

  goToDashboard(): void {
    window.location.href = App.base_url;
  }

}
