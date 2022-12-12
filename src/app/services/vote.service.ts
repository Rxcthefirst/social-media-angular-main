import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from '../models/Vote';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private voteUrl: string = `${environment.baseUrl}/vote`

  constructor(private http: HttpClient, private authService: AuthService) { }

  vote(votePayload: Vote): Observable<any> {
    return this.http.post(`${this.voteUrl}`, votePayload, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  findVote(id: number): Observable<any> {
    return this.http.get(`${this.voteUrl}/getOne/${id}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  checkVote(id: number): Observable<Vote> {
    return this.http.get<Vote>(`${this.voteUrl}/one/${this.authService.currentUser.id}&${id}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
