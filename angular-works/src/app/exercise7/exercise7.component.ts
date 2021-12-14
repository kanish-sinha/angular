import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise7',
  templateUrl: './exercise7.component.html',
  styleUrls: ['./exercise7.component.css']
})
export class Exercise7Component {
  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Testing' },
    { id: 3, name: 'Production' }
  ]
  constructor() { }
  submit(f: any) {
    console.log(f.value)
  }
}
