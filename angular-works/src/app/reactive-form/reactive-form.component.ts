import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './reactive-form.validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  form = new FormGroup({
    'username': new FormControl("", [Validators.required,
    Validators.minLength(5)]),
    'password': new FormControl('', [Validators.required,
      PasswordValidator.cantContainSpace])
  })
  constructor() { }
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
}

