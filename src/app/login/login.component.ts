import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

import { LoginFormat } from '../formats/login-format';

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
  userLogins: LoginFormat[];

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.getLogins()
      .then(response => this.userLogins = response);
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
    this.router.navigateByUrl('/dashboard');
  }

  registerHere(): void {
    this.router.navigateByUrl('/register');
  }

}
