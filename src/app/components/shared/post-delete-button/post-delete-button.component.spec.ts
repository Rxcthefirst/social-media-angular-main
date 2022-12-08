import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDeleteButtonComponent } from './post-delete-button.component';
import { AuthService } from '../../../services/auth.service';
import { PostService } from '../../../services/post.service';
import { Observable, defer } from 'rxjs';
import Post from '../../../models/Post';
import User from '../../../models/User';
import { PostFeedPageComponent } from '../../post-feed-page/post-feed-page.component';

describe('PostDeleteButtonComponent', () => {
  let component: PostDeleteButtonComponent;
  let fixture: ComponentFixture<PostDeleteButtonComponent>;
  let authServiceStub: Partial<AuthService>;
  let postServiceStub: Partial<PostService>;
  let postFeedPageComponentStub: Partial<PostFeedPageComponent>;
  

  authServiceStub = {

  }

  postServiceStub = {
    deletePost(id: number): Observable<any>{
      return defer(()=>Promise.resolve())
    },

    getAllPosts(): Observable<Post[]>{
      let posts: Post[] = [];
      return defer(()=>Promise.resolve(posts))
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDeleteButtonComponent ],
      providers: [
        {provide: AuthService, useValue: authServiceStub},
        {provide: PostService, useValue: postServiceStub},
        {provide: PostFeedPageComponent, useValue: postFeedPageComponentStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDeleteButtonComponent);
    component = fixture.componentInstance;
    let user = new User(0,"","","");
    component.post = new Post(0,"","",0,user,[]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
