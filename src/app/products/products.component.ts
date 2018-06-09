import {Component, OnInit} from '@angular/core';
import {ProductsService} from './products.service';
import {Product} from './model/product';
import {CommonHeaders} from '../common/http-headers';
import {UrlProvider} from '../common/url-provider';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService, CommonHeaders]
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductsService) {
  }

  ngOnInit() {
    this.productService.fetchProducts().subscribe((resp: any) => {
      this.products = resp.content;
    });
  }

  createProduct() {
    window.location.href = '/create-product';
  }

  isImageExists(product: Product): boolean {
    return this.getMainImageUrl(product);
  }

  public getMainImageUrl(product: Product) {
    return UrlProvider.getResourceURL(product, 'product-image');
  }
}
