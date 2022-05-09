import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { Candidate } from '../models/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  baseURL: string="http://localhost:8087/SpringMVC/condidat";
  candidates : Candidate[];

  constructor(private httpClient:HttpClient) { }

  getAll():any{
    return this.httpClient.get<any>(`${this.baseURL}/getall`);
  }
  createCandidate(candidate: Candidate): Observable<Candidate>{
    return this.httpClient.post<Candidate>(`${this.baseURL}/create`, candidate);
  }

}
