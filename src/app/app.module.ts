import {MaterialModule} from './material.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ProductsComponent} from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import {CreateProductComponent} from './create-product/create-product.component';
import {AppRoutingModule} from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { ValidatorModule } from './shared/validadors/validator.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    CreateProductComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ValidatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
