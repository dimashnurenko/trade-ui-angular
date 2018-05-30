import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../products/model/product';
import {UrlProvider} from '../common/url-provider';

@Injectable()
export class ImageService {

  constructor(private http: HttpClient) {
  }

  uploadImage(product: Product, formData: FormData) {
    const imagesUrl = UrlProvider.getResourceURL(product, 'product-images');
    const fileHeaders = new HttpHeaders().set('Authentication', localStorage.getItem('token'));
    this.http.post(imagesUrl, formData, {headers: fileHeaders}).subscribe(resp => {
      window.location.href = '/products';
    });
  }
}
