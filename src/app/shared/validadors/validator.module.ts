import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import { ValidatorComponent } from './validator-component/validator-component.component';

@NgModule({
  declarations: [
      ValidatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    ValidatorComponent
  ]
})
export class ValidatorModule {
}
