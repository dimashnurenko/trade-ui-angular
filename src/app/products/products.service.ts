import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './model/product';
import {CommonHeaders} from '../common/http-headers';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient, private headers: CommonHeaders) {
  }

  fetchProducts() {
    return this.http.get('http://localhost:8080/api/v1/products', {headers: this.headers.getHeaders()});
  }

  createProduct(product: Product) {
    return this.http.post('http://localhost:8080/api/v1/products', JSON.stringify(product), {headers: this.headers.getHeaders()});
  }
}
