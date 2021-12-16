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
  arr: any;
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
  submitSignup(f: any) {
    let s = f.value;
    if (s.passwords.newpassword !== s.passwords.confirmpassword) {
      this.form.setErrors({ invalid: true });
    }
    for (var i = 0; i < this.arr.length; i++) {
      if (s.username == this.arr[i].username) {
        this.form.setErrors({ invalid: true })
        break;
      }
    }
  }
}
