import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  name = '';
  email = '';
  password = "";
  constructor() { }
  save(value: string) {
    this.name = value;
    console.log(this.name);
  }
  savepass(value: string) {
    this.password = value;
    console.log(this.password);
  }
}
