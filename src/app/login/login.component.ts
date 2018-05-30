import {Component} from '@angular/core';
import {LoginService} from './login.service';
import {Token} from "./model/token";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {
  phone = '';
  password = '';

  constructor(private loginService: LoginService) {
  }

  login() {
    this.loginService.login(this.phone, this.password).subscribe((resp: Token) => {
      localStorage.setItem('token', resp.token);

      window.location.href = '/products';
    });
  }
}
