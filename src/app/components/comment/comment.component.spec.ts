import { ComponentFixture, TestBed } from '@angular/core/testing';
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

  authServiceStub = {

  }

  postServiceStub = {

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
});
