import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  @Injectable()
  export class PostService {
    constructor(private http:HttpClient) { }
  
    getPosts():Observable<Post[]> {
        return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    }
  
    getPost(id:number):Observable<Post> {
        return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }

  }
  