import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServeService {
  username = ['kanish', 'sinha', 'ansari', 'taseen'];
  email = ['kanish@gmail.com', 'kanishsnh@gmail.com'];
  url = 'http://localhost:3000'
  constructor() { }
  getusername() {
    return this.username;
  }
  getemail() {
    return this.email;
  }
}
