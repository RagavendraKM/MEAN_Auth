import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {email : '', password : ''}
  httpResponseObj = {
    status: '',
    statusText: ''
  };
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  async loginUser() {
    this.httpResponseObj = {
      status: '',
      statusText: ''
    };
    await this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('email', res.email);
          localStorage.setItem('token', res.token);
          this._router.navigate(['/special'])
        },
        err => {
          console.log(err);
          this.httpResponseObj.status = err.status;
          this.httpResponseObj.statusText = err.statusText;
        }
      )
  }

}
