import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise5',
  templateUrl: './exercise5.component.html',
  styleUrls: ['./exercise5.component.css']
})
export class Exercise5Component implements OnInit {
  select = true;
  count = 0; pointer = 'pointer';
  constructor() { }
  f1() {
    this.select = !this.select;
    if (this.select) {
      this.count -= 1;
    }
    else {
      this.count += 1;
    }
  }
  ngOnInit(): void {
  }

}
