import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient',['get','post']);
    authService = new AuthService(httpSpy);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });
});
