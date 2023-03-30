import { Component, OnInit } from '@angular/core';
import { Post } from './post-service';
import { PostService } from './post-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-try';
  posts: Post[];
  postService: PostService;

  constructor(postService: PostService) {
    this.posts = [{ id: 1, title: 'John', body: 'Smith' }];
   this.postService = postService;
  }

  ngOnInit() {
    this.postService.getPosts() // returns Observable<Post[]>    
    .subscribe(post => {
      this.posts = post;
    });
  }


}
