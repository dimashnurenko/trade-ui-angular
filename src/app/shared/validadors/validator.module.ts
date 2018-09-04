import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ValidatorComponent } from './validator-component/validator-component.component';
import { ValidationService } from './validator.service';

@NgModule({
  declarations: [
      ValidatorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ValidationService],
  exports: [
    ValidatorComponent
  ]
})
export class ValidatorModule {
}
