import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Token} from "../../models/token";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      phone: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  login() {
    console.log('login');
    const {phone, password} = this.loginForm.controls;
    if(this.loginForm.valid){
      this.authService.login(phone.value.trim(), password.value.trim()).subscribe((resp: Token) => {
        localStorage.setItem('token', resp.token);
     });
    }

  }
}
