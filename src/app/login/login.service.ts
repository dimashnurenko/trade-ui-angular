import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Token} from './model/token';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(phone, password) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('http://localhost:8080/api/v1/auth/token',
      JSON.stringify({phone: phone, password: password}),
      {headers: headers});
  }
}
