import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component {
  like = 'LIKE';
  right = true; count = 0;
  type = 'btn btn-success';
  constructor() { }
  f1() {
    if (this.like === "LIKE") {
      this.like = "DISLIKE";
      this.count += 1;
      this.type = 'btn btn-danger'
    }
    else {
      this.like = "LIKE";
      this.count -= 1;
      this.type = 'btn btn-success'
    }
  }
}
