import {Component} from '@angular/core';
import {LoginService} from './login.service';
import {Token} from "./model/token";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private loginService: LoginService) {
    this.loginForm = new FormGroup({
      phone: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  login() {
    // this.loginService.login(this.phone, this.password).subscribe((resp: Token) => {
    //   localStorage.setItem('token', resp.token);
    // });
  }
}
