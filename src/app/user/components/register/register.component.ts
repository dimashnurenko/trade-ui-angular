import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showError = false;

  registerForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router) {
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
    this.authService.getRegisterState().subscribe((state) => {
      this.showError = !state;
      console.log('state', state);
      if (state) {
        this.router.navigate(['../main']);
      }
    });
  }

  register() {
    const {phone, password, email, name} = this.registerForm.controls;
    if(this.registerForm.valid){
      this.authService.register( name.value.trim(), password.value.trim() ,email.value.trim(), phone.value.trim())
      .subscribe((resp) => {
        console.log('resp',resp);
        console.log('status', resp.status);
        if(resp.status >= 400){
          this.authService.setRegisterState(false);
        } else {
          this.authService.setRegisterState(true);
        }
     });
    }

  }

}
