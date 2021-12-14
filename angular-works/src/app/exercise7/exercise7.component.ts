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
  x: string = '';
  constructor() { }
  submit(f: any) {
    let obj = f.value;
    if (obj.courseName === ''||obj.categoryName===''||obj.checBox==='')
      this.x = 'border:2px ridge red'
  }
  f2() {
    return this.x;
  }
}
