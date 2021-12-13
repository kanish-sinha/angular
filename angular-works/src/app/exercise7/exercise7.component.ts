import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise7',
  templateUrl: './exercise7.component.html',
  styleUrls: ['./exercise7.component.css']
})
export class Exercise7Component {
  constructor() { }
  f1(x: any) {
    console.log(x);
  }
}
