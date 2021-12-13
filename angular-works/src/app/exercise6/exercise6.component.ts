import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise6',
  templateUrl: './exercise6.component.html',
  styleUrls: ['./exercise6.component.css']
})
export class Exercise6Component {

  name = ''; cartname = ''; show = true; cartcond = true;
  constructor() { }
  fill() {
    this.show = !this.show;
    this.name = 'SHOPPING CART DETAILS'
  }
  cart() {
    this.cartcond = !this.cartcond;
    this.cartname = 'CART DETAILS';
  }
}
