import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

declare var App: any;

@Injectable()
export class LoginService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private getLogin = App.base_url + 'getLogin';
  private forgotPassUrl = App.base_url + 'forgotPassword';
  private registerUrl = App.base_url + 'userRegister';
  private resetUrl = App.base_url + 'resetPasswordLink';

  constructor(private http: HttpClient) { }

  checkLogin(param: any): Promise<any> {
    return this.http
      .post(this.getLogin, JSON.stringify(param))
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  forgotPassword(email: any): Promise<any> {
    return this.http
      .post(this.forgotPassUrl, email)
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  resetPassword(param: any): Promise<any> {
    return this.http
      .post(this.resetUrl, param)
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  registerLogin(register: any): Promise<any> {
    return this.http
      .post(this.registerUrl, register)
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  /* For Demo Purpose */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
