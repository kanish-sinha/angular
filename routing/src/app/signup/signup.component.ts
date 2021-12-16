import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ServeService } from '../services/serve.service';
import { SignupValidate } from '../validators/signup.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form = new FormGroup({
    'username': new FormControl('', [Validators.required], [SignupValidate.usernameMatch]),
    'email': new FormControl('', [Validators.required,Validators.email], [SignupValidate.emailMatch]),
    passwords: new FormGroup({
      'newpassword': new FormControl('', [Validators.required]),
      'confirmpassword': new FormControl('', [Validators.required])
    })
  })
  constructor(service: ServeService) {  }
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
  }
  submitSignup(f: any) {
    let s = f.value;
    if (s.passwords.newpassword !== s.passwords.confirmpassword) {
      this.form.setErrors({ invalid: true });
    }
  }
}
