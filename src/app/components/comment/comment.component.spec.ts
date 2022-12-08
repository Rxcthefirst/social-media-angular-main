import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, defer, throwError } from 'rxjs';
import Post from 'src/app/models/Post';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

import { CommentComponent } from './comment.component';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;
  let authServiceStub: Partial<AuthService>;
  let postServiceStub: Partial<PostService>;
  let user = new User(0,"","","");
  let post = new Post(0,"","",0,user,[]);

  postServiceStub = {
    upsertComment(post: Post): Observable<any>{
      return defer(()=>Promise.resolve(post))
    }
  }

  authServiceStub = {
    currentUser: new User(0,"","","")
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentComponent ],
      providers: [
        {provide: AuthService, useValue: authServiceStub},
        {provide: PostService, useValue: postServiceStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    component.inputComment = post;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call toggleReply on successful submission',()=>{
    let oldVal = component.replyToComment;
    let mock = {preventDefault(){}};
    component.submitReply(mock);
    setTimeout(()=>{
      expect(component.replyToComment).toEqual(!oldVal);
    }, 500);

  });
});
