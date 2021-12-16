import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServeService {
  username = ['ansari', 'taseen'];
  email = ['kanish@gmail.com', 'kanishsnh@gmail.com'];
  constructor() { }
  getusername() {
    return this.username;
  }
  getemail() {
    return this.email;
  }
}
