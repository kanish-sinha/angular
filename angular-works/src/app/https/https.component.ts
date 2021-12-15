import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-https',
  templateUrl: './https.component.html',
  styleUrls: ['./https.component.css']
})
export class HttpsComponent implements OnInit {
  post: any;
  fa = '';
  constructor(private service: RequestService) {
  }

  ngOnInit(): void {
    this.service.getdata().subscribe((response) => {
      this.post = response;
      this.post.sort(function (a: any, b: any) { return b.id - a.id });
    })
  }
  getUser() {
    this.service.getdata().subscribe((response) => {
      this.post = response;
    })
  }
  createUser(f: HTMLInputElement) {
    let posts = { id: this.post.length + 1, title: f.value };
    f.value = '';
    this.service.postReq(JSON.stringify(posts)).subscribe(response => {
      this.post.splice(0, 0, posts);
    })
  }
  deleteUser(item: any) {
    this.service.deleteReq(item).subscribe(response => {
      let index = this.post.indexOf(item);
      this.post.splice(index, 1);
    })
  }
  updateUser(item: any) {
      this.service.updateReq(item).subscribe(async response => {
        item.title = this.fa;
      })
      setTimeout(() => {
        this.fa = '';
      }, 3000);
    }
}
