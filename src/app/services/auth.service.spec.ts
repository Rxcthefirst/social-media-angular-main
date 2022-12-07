import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { defer } from 'rxjs';
import User from '../models/User';
import { environment } from 'src/environments/environment';

describe('AuthService', () => {
  let authService: AuthService;
  let httpSpy: jasmine.SpyObj<HttpClient>;
  let user = new User(1,"email","first_name","last_name");
  let user2 = new User(2,"email2","first_name2","last_name2");

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient',['get','post']);
    httpSpy.get.and.returnValue(defer(()=>Promise.resolve(user)))
    authService = new AuthService(httpSpy);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should set currentUser on login', () => {
    httpSpy.post.and.returnValue(defer(()=>Promise.resolve(user2)));
    authService.login("","").subscribe((data)=>{  
      expect(authService.currentUser).toEqual(user2);
    });
  });

  it('should call logout endpoint',() => {
    httpSpy.post.and.returnValue(defer(()=>Promise.resolve(user2)));
    authService.logout();
    expect(httpSpy.post).toHaveBeenCalledWith(`${environment.baseUrl}/auth/logout`,null);
  });

  it('should call register endpoint',()=>{
    httpSpy.post.and.returnValue(defer(()=>Promise.resolve(user2)));
    authService.register(user2.firstName,user2.lastName,user2.email,"password");
    expect(httpSpy.post).toHaveBeenCalled();

  });
});
