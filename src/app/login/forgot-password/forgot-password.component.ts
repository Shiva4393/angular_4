import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../login.component.scss'],
  providers: [LoginService]
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordDetails: any = {};
  server_msg: string = '';
  success: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  forgotPassword(): void {
    if(!this.forgotPasswordDetails.hasOwnProperty('email')) return;
    this.loginService
      .forgotPassword(this.forgotPasswordDetails)
      .then(response => {
        this.server_msg = response.result.message;
        if(response.result.success)
          this.success = true;
        else
          this.success = false;
      })
      .catch(error => console.log(error));
  }

  clear(): void{
    this.forgotPasswordDetails = {};
  }

  goBack(): void{
    this.router.navigateByUrl('/login');
  }

}
