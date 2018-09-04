import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import { ValidationService } from '../../../shared/validadors/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showError = false;
  formIsSubmited = false;
  registerForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router) {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, ValidationService.passwordValidator]),
      email: new FormControl(null, [Validators.required, ValidationService.emailValidator]),
      phone: new FormControl(null, [Validators.required, ValidationService.telephoneValidator]),
    });
  }

  ngOnInit() {
    this.authService.getRegisterState().subscribe((state) => {
      this.formIsSubmited = false;
      this.showError = !state;
      if (state) {
        this.router.navigate(['../main']);
      }
    });
  }

  register() {
    const {phone, password, email, name} = this.registerForm.controls;
    if(this.registerForm.valid){
      this.formIsSubmited = true;
      this.authService.register(name.value.trim(), password.value.trim(), email.value.trim(), phone.value.trim());
    }
  }

}
