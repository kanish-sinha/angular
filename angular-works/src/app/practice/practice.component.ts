import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  name = 'kan'; namei = '';
  names = '';
  isBlue = true;
  practice = 'text'; condition = false;
  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' }
  ]
  constructor() { }
  f1(event: any) {
    this.name = event.target.value;
  }
  f2() {
    this.names = this.name;
    this.isBlue = !this.isBlue;
    this.practice = 'color';
  }
  keyup(email: any) {
    console.log(email);
  }
  val = 'he';
    
}
