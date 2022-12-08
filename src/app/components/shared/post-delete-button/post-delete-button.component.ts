import { Component, Input, OnInit } from '@angular/core';
import Post from '../../../models/Post';
import { PostService } from '../../../services/post.service';
import { AuthService } from '../../../services/auth.service';
import { PostFeedPageComponent } from '../../post-feed-page/post-feed-page.component';
import User from '../../../models/User';

@Component({
  selector: 'app-post-delete-button',
  templateUrl: './post-delete-button.component.html',
  styleUrls: ['./post-delete-button.component.css']
})
export class PostDeleteButtonComponent implements OnInit {
  @Input('post') post: Post;
  user: User = this.authService.currentUser
  
  constructor(
    private postService: PostService,
    private authService: AuthService,
    private postFeedPageComponent: PostFeedPageComponent
    ) { }

  ngOnInit(): void {
  }

  deletePost() {
    this.postService.deletePost(this.post.id).subscribe(post => {
      this.postService.getAllPosts().subscribe(
        (response) => {
          this.postFeedPageComponent.posts = response
        }
      )
    });
  }

  

}
