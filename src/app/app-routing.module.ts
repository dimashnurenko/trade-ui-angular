import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/components//login/login.component';
import { RegisterComponent } from './user/components//register/register.component';
import { ProductsComponent } from './products/products.component';
import { MainComponent } from './main/main.component';
import { CreateProductRoutes } from './create-product/create-product-routing.module';


export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'products',
      component: ProductsComponent
    },
    {
      path: 'main',
      component: MainComponent
    },
    ...CreateProductRoutes,
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
