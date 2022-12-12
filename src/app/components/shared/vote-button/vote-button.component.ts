import { Component, OnInit, Input } from '@angular/core';
import Post from 'src/app/models/Post';
import { Vote } from 'src/app/models/Vote';
import { VoteType } from './vote-type';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit {

  @Input('post') post: Post;
  votePayload: Vote;
  upvoteColor: string;
  downvoteColor: string;
  downVote: boolean = false
  upVote: boolean = false

  constructor(
    private voteService: VoteService,
    private authService: AuthService,
    private postService: PostService
    ) {


  this.votePayload = {
    id: 0,
    voteType: VoteType.UPVOTE,
    post: this.post,
    user: this.authService.currentUser
    }

  }

  ngOnInit(): void {
    this.updateVoteDetails();
    this.checkVoteStatus();
  }

  
  upvotePost() {
    this.votePayload.voteType = VoteType.UPVOTE;
    this.vote();
    this.downvoteColor = '';
  }

  downvotePost() {
    this.votePayload.voteType = VoteType.DOWNVOTE;
    this.vote();
    this.upvoteColor = '';
  }

  private vote() {
    let newVote = new Vote(0, this.votePayload.voteType, this.post, this.authService.currentUser)
    this.voteService.vote(newVote).subscribe(() => {
      this.updateVoteDetails();
      this.checkVoteStatus();
    }, error => {
      throw(error);
    });
  }

  private updateVoteDetails() {
    this.postService.getPost(this.post.id).subscribe(post => {
      this.post = post;
    });
  }

  checkVoteStatus = () => {
    let res = this.voteService.checkVote(this.post.id)
    res.subscribe((data) => {
      if (!data) {
        this.downVote = false
        this.upVote = false
        console.log(`No data for ${this.post.id}`)
      }

      if (data.voteType.toString()==="DOWNVOTE") {
        this.downVote = true
        this.upVote = false
        console.log(`The status on post id: ${this.post.id} is DOWNVOTE and this.downvote is ${this.downVote}`)
      }

      if (data.voteType.toString()==="UPVOTE") {
        this.downVote = false
        this.upVote = true
        console.log(`The status on post id: ${this.post.id} is UPVOTE and this.upVote is ${this.upVote}`)
      }
    })
  }
    
}
