import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl = "http://3.83.55.183/api";

private _regUrl = `${this._baseUrl}/register`;
private _loginUrl = `${this._baseUrl}/login`;

  constructor(private http: HttpClient, private _router : Router) { }

  registerUser(user) {
    return this.http.post<any>(this._regUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logOutUser(){
    this._router.navigate(['/events'])
    return localStorage.clear()
  }

}
