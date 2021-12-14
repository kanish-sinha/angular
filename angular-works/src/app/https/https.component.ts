import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-https',
  templateUrl: './https.component.html',
  styleUrls: ['./https.component.css']
})
export class HttpsComponent implements OnInit {
  post: any = [{}];
  url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe(response=>{
      console.log(response.valueOf)
    })
   }

  ngOnInit(): void {
  }
  // getUser(){
  //   this.http.get(this.url).subscribe(response=>{
  //     console.log(response.id)
  //   })
  // }
  // createUser(f: HTMLInputElement) {
  //   let post = { title: f.value };
  //   f.value = '';
  //   this.http.post(this.url,JSON.stringify(post)).subscribe(response=>{
    
  //   })
 // }
}
