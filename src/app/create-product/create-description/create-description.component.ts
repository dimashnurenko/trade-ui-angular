import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'create-description',
  templateUrl: './create-description.component.html',
  styleUrls: ['./create-description.component.scss']
})
export class CreateDescriptionComponent {

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
