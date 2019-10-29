import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private _regUrl = "http://localhost:3000/api/register";
private _loginUrl = "http://localhost:3000/api/login";

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
