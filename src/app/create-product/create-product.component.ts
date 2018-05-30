import {Component, ViewChild} from '@angular/core';
import {ProductsService} from '../products/products.service';
import {Product} from '../products/model/product';
import {ImageService} from './image.service';
import {UrlProvider} from '../common/url-provider';
import {CommonHeaders} from '../common/http-headers';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  providers: [ProductsService, ImageService, UrlProvider, CommonHeaders]
})
export class CreateProductComponent {

  @ViewChild('fileInput') fileInput;
  title: string;
  description: string;
  price: number;

  constructor(private productService: ProductsService, private imageService: ImageService) {
  }

  createProduct() {
    const product = new Product();
    product.title = this.title;
    product.description = this.description;
    product.price = this.price;

    this.productService.createProduct(product).subscribe((resp: Product) => {
      const fileBrowser = this.fileInput.nativeElement;
      const formData = new FormData();
      if (fileBrowser.files && fileBrowser.files[0]) {
        formData.append('image', fileBrowser.files[0]);
      }

      this.imageService.uploadImage(resp, formData);
    });
  }
}
