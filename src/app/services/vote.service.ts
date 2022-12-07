import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from '../models/Vote';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) { }

  vote(votePayload: Vote): Observable<any> {
    return this.http.post('http://localhost:8081/vote/', votePayload, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
