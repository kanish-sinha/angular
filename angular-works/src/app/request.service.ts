import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }
  getdata() {
    return this.http.get(this.url)
  }
  postReq(obj: any) {
    return this.http.post(this.url, obj);
  }
  deleteReq(obj: any) {
    return this.http.delete(this.url+'/'+obj.id);
  }
  updateReq(obj:any){
    return this.http.patch(this.url+'/'+obj.id,obj)
  }
}
