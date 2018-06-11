import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Token} from '../models/token';
import { Subject, Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  loginState: Subject<boolean> = new Subject();
  loginState$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.loginState$ = this.loginState.asObservable();
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

  register(phone, password) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('http://localhost:8080/api/v1/auth/token',
      JSON.stringify({phone: phone, password: password}),
      {headers: headers});
  }
}
