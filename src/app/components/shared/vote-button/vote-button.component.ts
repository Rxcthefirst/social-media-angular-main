import { Component, OnInit, Input } from '@angular/core';
import Post from 'src/app/models/Post';
import { Vote } from 'src/app/models/Vote';
import { VoteType } from './vote-type';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { throwError } from 'rxjs';

import { VoteService } from 'src/app/services/vote.service';
import User from '../../../models/User';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit {

  @Input() post: Post;
  votePayload: Vote;

  constructor(
    private voteService: VoteService,
    private authService: AuthService,
    private postService: PostService
    ) {

  }

  ngOnInit(): void {
    this.updateVoteDetails();
  }

  
  upvotePost() {
    this.votePayload.voteType = VoteType.UPVOTE;
    this.vote();
  }

  downvotePost() {
    this.votePayload.voteType = VoteType.DOWNVOTE;
    this.vote();
  }

  private vote() {
    this.votePayload.postId = this.post.id;
    this.voteService.vote(this.votePayload).subscribe(() => {
      this.updateVoteDetails();
    }, error => {
    });
  }

  private updateVoteDetails() {
    this.postService.getPost(this.post.id).subscribe(post => {
      this.post = post;
    });
  }
    
}
