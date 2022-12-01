import { Component, OnInit } from '@angular/core';
import Post from 'src/app/models/Post';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  posts!: Post[];

  user_image = "https://www.oxilab.org/wp-content/uploads/2018/05/1.jpg?189db0&189db0"
  user_first_name = "Jack"
  user_last_name = "Smith"
  user_country = "UK"
  user_city = "London"

  user!: User;

  constructor(private authService: AuthService, private postService: PostService) {};

  ngOnInit(): void {
    this.authService.restoreSession().subscribe( user => {
      this.user = user;

      this.postService.userPosts(this.user.id).subscribe( posts => {
        this.posts = posts;
      })
    })

    
  }

}
