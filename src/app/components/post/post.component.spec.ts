import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defer, Observable } from 'rxjs';
import Post from 'src/app/models/Post';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let postServiceStub: Partial<PostService>;
  let authServiceStub: Partial<AuthService>;

  postServiceStub = {

  }

  authServiceStub = {

  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComponent ],
      providers:[
        {provide: PostService, useValue: postServiceStub},
        {provide: AuthService, useValue: authServiceStub}
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    let user = new User(0,"","","");
    component.post = new Post(0,"","",0,user,[]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
