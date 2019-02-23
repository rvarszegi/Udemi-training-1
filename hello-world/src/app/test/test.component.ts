import { Component, OnInit } from '@angular/core';
import { isDate } from 'util';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  username: string;
  passwordVisible = false;
  buttonClicked = [];
  actualTime;
  afterFive = false;
  constructor() { }

  ngOnInit() {
  }
  clearUsername() {
    this.username = '';
  }
  onDipslayClick() {
    if (this.passwordVisible === true) {
      this.passwordVisible = false;
    } else {
      this.passwordVisible = true;
    }
    this.buttonClicked.push( Date());
  }
}
