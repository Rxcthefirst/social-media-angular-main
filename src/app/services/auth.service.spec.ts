import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { defer } from 'rxjs';
import User from '../models/User';

describe('AuthService', () => {
  let authService: AuthService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient',['get','post']);
    let user = new User(1,"email","first_name","last_name");
    httpSpy.get.and.returnValue(defer(()=>Promise.resolve(user)))
    authService = new AuthService(httpSpy);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });
});
