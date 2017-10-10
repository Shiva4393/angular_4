import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomValidation } from '../custom-validation';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../login.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;
  server_msg: string = '';
  success: boolean = false;
  token: string;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.token = params['id'];
    });
    this.createForm();
  }

  createForm(): void{
    this.resetForm = this.fb.group({
      password: [null, Validators.required],
      newPassword: [null, Validators.required],
      confirmPassword: [null, Validators.required],
    }, {
      validator: CustomValidation.MatchPassword
    })
  }

  resetPassword(form: any): void {
    if(!this.resetForm.valid) return;
    this.resetForm.value.token = this.token;
    this.loginService
      .resetPassword(this.resetForm.value)
      .then(response => {
        this.server_msg = response.result.message;
        if (response.result.success)
          this.success = true;
        else
          this.success = false;
      })
      .catch(error => console.log(error));
  }

}
