import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServeService } from '../services/serve.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required])
  })
  constructor(private service: ServeService) {
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('passsword');
  }
  ngOnInit(): void {
  }
  submitLogin(f: any) {
    let obj = f.value;
    let arr = this.service.getemail();
    for (var i = 0; i < arr.length; i++) {
      if (obj.email === arr[i])
        break;
    }
    if (i >= arr.length)
      this.form.setErrors({ invalid: true });
  }
}
