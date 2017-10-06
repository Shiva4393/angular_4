import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { LoginFormat } from '../formats/login-format';

@Injectable()
export class LoginService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private loginsUrl = 'api/getLogin';  // URL to web api
  
  private getLogin = 'api/getLogin';
  constructor(private http: Http) { }

  getLogins(): Promise<LoginFormat[]> {
    return this.http.get(this.loginsUrl)
      .toPromise()
      .then(response => response.json().data as LoginFormat[])
      .catch(this.handleError);
  }

  checkLogin(param: any): Promise<any> {
    const url = `${this.loginsUrl}/${param.username}`;
    return this.http
      .get(this.getLogin)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  registerLogin(register: LoginFormat): Promise<LoginFormat> {
    return this.http
      .post(this.loginsUrl, JSON.stringify(register), { headers: this.headers })
      .toPromise()
      .then(response => response.json().data as LoginFormat[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
