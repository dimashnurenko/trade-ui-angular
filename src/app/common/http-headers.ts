import {HttpHeaders} from '@angular/common/http';

export class CommonHeaders {

  public getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
      .append('Authentication', localStorage.getItem('token'));
  }
}
