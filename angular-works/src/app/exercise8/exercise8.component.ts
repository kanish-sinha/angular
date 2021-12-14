import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './exercise8.validators';

@Component({
  selector: 'app-exercise8',
  templateUrl: './exercise8.component.html',
  styleUrls: ['./exercise8.component.css']
})
export class Exercise8Component {
  form = new FormGroup({
    'oldpassword': new FormControl('', [Validators.required],[PasswordValidator.passwordMistake]),
    'newpassword': new FormControl('', [Validators.required]),
    'confirmpassword': new FormControl('', [Validators.required])
  })
  constructor() { }
  get oldpassword() {
    return this.form.get('oldpassword');
  }
  get newpassword() {
    return this.form.get('newpassword');
  }
  get confirmpassword() {
    return this.form.get('confirmpassword');
  }
  submit(f: any) {
    let obj = f.value;
    if(obj.newpassword!=obj.confirmpassword){
      this.form.setErrors({
        invalid:true
      })
    }
  }
}
