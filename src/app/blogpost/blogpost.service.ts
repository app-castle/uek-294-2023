import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blogpost } from './blogpost';

@Injectable({
  providedIn: 'root',
})
export class BlogpostService {
  constructor(private http: HttpClient) {}

  public getPosts() {
    const request = this.http.get<Blogpost[]>(
      'http://localhost:3000/blogposts'
    );
    return request;
  }

  public getOnePost(id: number) {
    return this.http.get<Blogpost>('http://localhost:3000/blogposts/' + id);
  }
}
