import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'validator-component',
  templateUrl: './validator-component.component.html',
  styleUrls: ['./validator-component.component.scss']
})
export class ValidatorComponent implements OnInit {

  @Input('control')control: FormControl;

  constructor() {}

  ngOnInit() {
   // console.log(this.control);
  }

}
