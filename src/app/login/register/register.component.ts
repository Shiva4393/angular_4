import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submit: boolean;
  registerDetails: any = {};

  constructor(
    private router: Router,
    private loginService: LoginService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  this.createForm();
  }

  createForm(): void {
    this.registerForm = this.fb.group({
      first_name: [null, Validators.required],
      last_name: null,
      username: [null, [Validators.required, Validators.minLength(8)]],
      password: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9@*#]{8,15}")]],
      email: [null, [Validators.required, Validators.email]],
      phone_no: null,
      age: null
    })
  }

  register(): void{
  console.log(this.registerForm.value)
  this.submit = true;
  if(!this.registerForm.valid) return;
  this.submit = false;
    /*this.loginService.registerLogin(this.registerDetails)
    .then(response => this.goBack())*/
  }

  clear(): void{
    this.registerForm.reset();
  }

  goBack(): void{
    this.router.navigateByUrl('/login');
  }

}
