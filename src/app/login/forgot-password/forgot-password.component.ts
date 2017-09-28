import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';

import { LoginFormat } from '../../formats/login-format';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers: [LoginService]
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordDetails: any = {};
  userLogins: LoginFormat[];

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.getLogins()
      .then(response => this.userLogins = response);
  }

  forgotPassword(): void {
    this.userLogins.forEach(login => {
      if (login.email === this.forgotPasswordDetails.email){
        console.log('success');
        this.goBack();
      }
      else{
        console.log('Invalid Email Address');
      }
    })
  }

  goBack(): void{
    this.router.navigateByUrl('/login');
  }

}
