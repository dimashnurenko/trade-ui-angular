import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Token} from '../models/token';
import { Subject, Observable, pipe,  of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class AuthService {

  loginState: Subject<boolean> = new Subject();
  loginState$: Observable<boolean>;
  registerState: Subject<boolean> = new Subject();
  registerState$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.loginState$ = this.loginState.asObservable();
    this.registerState$ = this.registerState.asObservable();
  }

  login(phone, password) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('http://localhost:8080/api/v1/auth/token',
      JSON.stringify({phone: phone, password: password}), {headers: headers})
      .pipe(catchError(err => of(err)))
      .subscribe((resp) => {
        console.log('resp', resp);
        if(resp.status >= 400){
          this.setLoginState(false);
        } else {
          this.setLoginState(true);
        }
     });
  }

  setLoginState(state: boolean) {
    this.loginState.next(state);
  }

  getLoginState() {
    return this.loginState$;
  }

  register(name, password, email, phone) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('http://localhost:8080/api/v1/auth/',
      JSON.stringify(
        {
          "email": email,
          "name": name,
          "password": password,
          "phone": phone
        }
      ),
      {headers: headers})
      .pipe(catchError(err => of(err)))
      .subscribe((resp) => {
        if(resp.status >= 400){
          this.setRegisterState(false);
        } else {
          this.setRegisterState(true);
        }
     });
  }

  setRegisterState(state: boolean) {
    this.registerState.next(state);
  }

  getRegisterState() {
    return this.registerState$;
  }
}
