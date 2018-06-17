import {Component, ViewChild} from '@angular/core';
import {ProductsService} from '../products/products.service';
import {Product} from '../products/model/product';
import {ImageService} from './image.service';
import {UrlProvider} from '../common/url-provider';
import {CommonHeaders} from '../common/http-headers';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
  providers: [ProductsService, ImageService, UrlProvider, CommonHeaders]
})
export class CreateProductComponent {

  showError = false;

  productForm: FormGroup;

  constructor(private router: Router) {
    this.productForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      file: new FormControl(null, Validators.required),
    });
  }

  createProduct() {

  }
}
