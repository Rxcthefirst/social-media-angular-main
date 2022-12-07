import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';

import { ProfilePageComponent } from './profile-page.component';
/*
describe('ProfilePageComponent', () => {
  let component: ProfilePageComponent;
  let fixture: ComponentFixture<ProfilePageComponent>;
  let authServiceStub: Partial<AuthService>;
  let postServiceStub: Partial<PostService>;
  let dialogStub: Partial<MatDialog>;
  let routerStub: Partial<Router>;
  let profileServiceStub: Partial<ProfileService>;
  let activatedRouteStub: Partial<ActivatedRoute>;


  authServiceStub = {

  }

  postServiceStub = {

  }

  dialogStub = {

  }

  profileServiceStub = {

  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageComponent ],
      providers: [
        {provide: AuthService, useValue: authServiceStub},
        {provide: PostService, useValue: postServiceStub},
        {provide: MatDialog, useValue: dialogStub},
        {provide: Router, useValue: routerStub},
        {provide: ProfileService, useValue: profileServiceStub},
        {provide: ActivatedRoute, useValue: activatedRouteStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); */
