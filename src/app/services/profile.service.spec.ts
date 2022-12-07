import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from './profile.service';
import { IProfile, IChangePassword } from '../models/Profile'

describe('ProfileService', () => {
  let profileService: ProfileService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient',['get','post']);
    profileService = new ProfileService(httpSpy);
  });

  it('should be created', () => {
    expect(profileService).toBeTruthy();
  });
});
