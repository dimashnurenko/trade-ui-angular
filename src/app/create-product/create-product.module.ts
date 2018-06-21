import { CreateProductComponent } from './create-product.component';
import { CreateDescriptionComponent } from './create-description/create-description.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ValidatorModule } from '../shared/validadors/validator.module';

import {ProductsService} from '../products/products.service';
import {ImageService} from './image.service';
import {UrlProvider} from '../common/url-provider';
import {CommonHeaders} from '../common/http-headers';


@NgModule({
  declarations: [
    CreateProductComponent,
    CreateDescriptionComponent,
  ],
  imports: [
    ReactiveFormsModule,
    ValidatorModule
  ],
  exports: [
    CreateProductComponent,
    CreateDescriptionComponent
  ],
  providers: [ProductsService, ImageService, UrlProvider, CommonHeaders]
})
export class CreateProductModule {
}
