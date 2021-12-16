import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ServeService } from '../services/serve.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  arr: any;
  form = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required])
  })
  constructor(private service2: ApiService, private service: ServeService) {
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('passsword');
  }
  ngOnInit() {
    this.service2.getData().subscribe(response => {
      this.arr = response;
    })
  }
  getUser() {
    this.service2.getData().subscribe(response => {
      this.arr = response;
    })
  }
  submitLogin(f: any) {
    let obj = f.value;
    this.service2.getData().subscribe(response => {
      this.arr = response;
    })
    for (var i = 0; i < this.arr.length; i++) {
      if (obj.email == this.arr[i].email&&obj.password==this.arr[i].password) {
        break;
      }
    }
    if (i >= this.arr.length)
      this.form.setErrors({ invalid: true });
   }
}
