import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

import { LoginFormat } from '../formats/login-format';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginDetails: any = {};
  userLogins: LoginFormat[];

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.getLogins()
      .then(response => this.userLogins = response);
  }

  login(): void {
    this.userLogins.forEach(login => {
      if(login.username === this.loginDetails.username){
        if(login.password === this.loginDetails.password){
          console.log('success');
        }
        else{
          console.log('Invalid Password');
        }
        return;
      }
      else{
        console.log('Invalid username and password');
      }
    })
  }

  registerHere(): void {
    this.router.navigateByUrl('/register');
  }

}
