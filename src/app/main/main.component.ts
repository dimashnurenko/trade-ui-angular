import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  onClick() {
    this.router.navigate(['../create-product']);
  }

}
