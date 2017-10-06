import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';

import { LoginFormat } from '../../formats/login-format';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login.component.scss']
})
export class RegisterComponent implements OnInit {

  registerDetails: any = {};

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  register(): void{
    this.loginService.registerLogin(this.registerDetails)
    .then(response => this.goBack())
  }

  clear(): void{
    this.registerDetails = {};
  }

  goBack(): void{
    this.router.navigateByUrl('/login');
  }

}
