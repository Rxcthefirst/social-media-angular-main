import { HttpClient } from '@angular/common/http';
import { VoteService } from './vote.service';

describe('VoteService', () => {
  let voteService: VoteService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient',['post']);
    voteService = new VoteService(httpSpy);
  });

  it('should be created', () => {
    expect(voteService).toBeTruthy();
  });
});
