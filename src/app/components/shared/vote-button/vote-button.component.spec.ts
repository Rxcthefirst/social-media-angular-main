import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defer, Observable } from 'rxjs';
import Post from 'src/app/models/Post';
import User from 'src/app/models/User';
import { Vote } from 'src/app/models/Vote';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { VoteService } from 'src/app/services/vote.service';

import { VoteButtonComponent } from './vote-button.component';

describe('VoteButtonComponent', () => {
  let component: VoteButtonComponent;
  let fixture: ComponentFixture<VoteButtonComponent>;
  let voteServiceSpy: jasmine.SpyObj<VoteService>;
  let authServiceStub: Partial<AuthService>;
  let postServiceStub: Partial<PostService>;
  let user = new User(0,"","","");
  let post = new Post(0,"","",0,user,[]);
  voteServiceSpy = jasmine.createSpyObj('VoteService', ['vote'])

  authServiceStub = {
    currentUser: user
  }

  postServiceStub = {
    getPost(id: number): Observable<Post>{
      return defer(()=>Promise.resolve(post))
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteButtonComponent ],
      providers: [
        {provide: VoteService, useValue: voteServiceSpy},
        {provide: AuthService, useValue: authServiceStub},
        {provide: PostService, useValue: postServiceStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteButtonComponent);
    component = fixture.componentInstance;
    component.post = post;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call voteService vote on upvote',()=>{
    let value: Observable<any> = defer(()=>Promise.resolve(true))
    voteServiceSpy.vote.and.returnValue(value);
    component.upvotePost();
    expect(voteServiceSpy.vote).toHaveBeenCalled();
  });

  it('should call voteService vote on downvote',()=>{
    let value: Observable<any> = defer(()=>Promise.resolve(true))
    voteServiceSpy.vote.and.returnValue(value);
    component.downvotePost();
    expect(voteServiceSpy.vote).toHaveBeenCalled();
  });
});
