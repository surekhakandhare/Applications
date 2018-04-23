import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthenticationService {
  token = {
    refresh_token: 'refreshtokencode',
    exp: new Date((new Date().getDate() +1)),
    access_token: {
      username: 'user',
      roles: ['Admin', 'RegisteredUser', 'Super User']
    }
  };

  tokenKey: string = "a5smm_utoken";
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(private router: Router) { }
   
  login(username, password) {
   
    this.loggedIn.next(true);
    this.router.navigate(['dashboard','home']);
  }

  logout() {                            // {4}
  this.loggedIn.next(false);
  this.router.navigate(['login']);
}

  getToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey));
  }

  setToken(token) {
    localStorage.setItem(this.tokenKey, JSON.stringify(token));
  }

  getAccessToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey))['access_token'];
  }

  isAuthenticated() {
    let token = localStorage.getItem(this.tokenKey);
    
    if (token) {
      return true;
    }
    else {
      return false;
    }
  }

  refreshToken() {
    this.token.exp = new Date((new Date().getDate() +1));
    this.setToken(this.token);
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }

}
