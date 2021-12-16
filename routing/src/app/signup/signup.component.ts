import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { SignupValidate } from '../validators/signup.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  arr: any; fa = '';
  form = new FormGroup({
    'username': new FormControl('', [Validators.required], [SignupValidate.usernameMatch]),
    'email': new FormControl('', [Validators.required, Validators.email], [SignupValidate.emailMatch]),
    passwords: new FormGroup({
      'newpassword': new FormControl('', [Validators.required]),
      'confirmpassword': new FormControl('', [Validators.required])
    })
  })
  constructor(private service2: ApiService) { }
  get username() {
    return this.form.get('username');
  }
  get email() {
    return this.form.get('email');
  }
  get newpassword() {
    return this.form.controls['passwords'].get('newpassword');
  }
  get confirmpassword() {
    return this.form.controls['passwords'].get('confirmpassword');
  }
  ngOnInit(): void {
    this.service2.getData().subscribe(response => {
      this.arr = response;
    })
  }
  getUser() {
    this.service2.getData().subscribe(response => {
      this.arr = response;
    })
  }
  createUser(f: HTMLInputElement) {

  }
  submitSignup(f: any) {
    let s = f.value;
    if (s.passwords.newpassword !== s.passwords.confirmpassword) {
      this.form.setErrors({ invalid: true });
      this.fa = 'Password Not Matched'
    }
    for (var i = 0; i < this.arr.length; i++) {
      if (s.username == this.arr[i].username) {
        this.form.setErrors({ invalid: true })
        this.fa = 'Username already taken'
        break;
      }
    }
    for (var i = 0; i < this.arr.length; i++) {
      if (s.email == this.arr[i].email) {
        this.form.setErrors({ invalid: true })
        this.fa = 'Email already registered'
        break;
      }
    }
    if (i >= this.arr.length) {
      let arr2 = { id: this.arr.length, username: s.username, email: s.email, password: s.password };
      f.value = '';
      this.service2.postReq(JSON.stringify(arr2)).subscribe(response => {
        this.arr.splice(0, 0, arr2);
      })
    }
  }
}
