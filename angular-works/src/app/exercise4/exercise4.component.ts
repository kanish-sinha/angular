import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise4',
  templateUrl: './exercise4.component.html',
  styleUrls: ['./exercise4.component.css']
})
export class Exercise4Component implements OnInit {
  selected = true;
  constructor() { }
  f1() {
    this.selected = !this.selected;
  }
  ngOnInit(): void {
  }

}
