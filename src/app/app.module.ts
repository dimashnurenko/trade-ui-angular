import {MaterialModule} from './material.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CreateProductModule } from './create-product/create-product.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './user/components/login/login.component';
import {ProductsComponent} from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { RegisterComponent } from './user/components/register/register.component';
import { ValidatorModule } from './shared/validadors/validator.module';
import { AuthService } from './user/services/auth.service';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    RegisterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ValidatorModule,
    CreateProductModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
