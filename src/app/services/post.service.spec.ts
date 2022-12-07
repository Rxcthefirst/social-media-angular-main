import { HttpClient } from '@angular/common/http';
import { PostService } from './post.service';

describe('PostService', () => {
  let postService: PostService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient',['get','put']);
    postService = new PostService(httpSpy);
  });

  it('should be created', () => {
    expect(postService).toBeTruthy();
  });
});
