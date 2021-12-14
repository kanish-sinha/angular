import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
url='https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }
  getdata(){
    return this.http.get(this.url)
  }
}
