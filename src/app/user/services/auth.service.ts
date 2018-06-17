import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Token} from '../models/token';
import { Subject, Observable } from 'rxjs';
import 'rxjs/add/operator/map';

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
    console.log('phone', phone);
    console.log('password', password);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('http://localhost:8080/api/v1/auth/token',
      JSON.stringify({phone: phone, password: password}), {headers: headers})
      .catch(err =>  Observable.of(err))
  }

  setResponse(response){

  }

  setLoginState(state: boolean) {
    this.loginState.next(state);
  }

  getLoginState() {
    return this.loginState$;
  }

  register(name, password, email, phone) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('http://localhost:8080/api/v1/users/',
      JSON.stringify(
        {
          "email": email,
          "name": name,
          "password": password,
          "phone": phone
        }
      ),
      {headers: headers})
      .catch(err =>  Observable.of(err));
  }

  setRegisterState(state: boolean) {
    this.registerState.next(state);
  }

  getRegisterState() {
    return this.registerState$;
  }
}
