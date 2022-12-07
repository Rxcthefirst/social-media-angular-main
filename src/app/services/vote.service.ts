import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from '../models/Vote';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private voteUrl: string = `${environment.baseUrl}/vote`

  constructor(private http: HttpClient) { }

  vote(votePayload: Vote): Observable<any> {
    return this.http.post(`${this.voteUrl}`, votePayload, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
