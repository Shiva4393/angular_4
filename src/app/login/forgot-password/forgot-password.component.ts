import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';

import { LoginFormat } from '../../formats/login-format';

export class Result{
  success: boolean;
  message: string;
  data: Array<{}>;
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../login.component.scss'],
  providers: [LoginService]
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordDetails: any = {};
  userLogins: LoginFormat[];
  result: Result;

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
      let result = this.checkValidation(login);
      if(result.success){
        console.log('success');
        this.goBack();
      }
      else{
        console.log('error');
      }
    })
  }

  checkValidation(login: LoginFormat): Result{
    if (login.email === this.forgotPasswordDetails.email)
      this.result.success = true;
    else
      this.result.success = false;

    return this.result;
  }

  clear(): void{
    this.forgotPasswordDetails = {};
  }

  goBack(): void{
    this.router.navigateByUrl('/login');
  }

}
