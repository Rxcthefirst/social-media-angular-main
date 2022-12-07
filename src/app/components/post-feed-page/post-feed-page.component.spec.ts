import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defer } from 'rxjs';
import { Observable } from 'rxjs';
import Post from 'src/app/models/Post';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

import { PostFeedPageComponent } from './post-feed-page.component';

describe('PostFeedPageComponent', () => {
  let component: PostFeedPageComponent;
  let fixture: ComponentFixture<PostFeedPageComponent>;
  let postServiceStub: Partial<PostService>;
  let authServiceStub: Partial<AuthService>;

  postServiceStub = {
    getAllPosts(): Observable<Post[]> {
      let posts: Post[] = [];
      return defer(()=>Promise.resolve(posts));
    }
  }

  authServiceStub = {

  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostFeedPageComponent ],
      providers:[
        {provide: PostService, useValue: postServiceStub},
        {provide: AuthService, useValue: authServiceStub}
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostFeedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
