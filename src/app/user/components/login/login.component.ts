import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Token} from "../../models/token";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse } from 'selenium-webdriver/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  showError = false;

  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router) {
    this.loginForm = new FormGroup({
      phone: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
    this.authService.getLoginState().subscribe((state) => {
      this.showError = !state;
      if (state) {
        this.router.navigate(['../main']);
      }
    });
  }

  login() {
    const {phone, password} = this.loginForm.controls;
    if(this.loginForm.valid){
      this.authService.login(phone.value.trim(), password.value.trim()).subscribe((resp) => {
        if(resp.status >= 400){
          this.authService.setLoginState(false);
        } else {
          this.authService.setLoginState(true);
        }
     });
    }

  }
}
