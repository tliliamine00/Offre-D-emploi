import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Offre } from '../models/offre';
@Injectable({
  providedIn: 'root'
})
export class OffreService {
  

  baseURL: string="http://localhost:8087/SpringMVC/offre";
 offres: Offre[];
  constructor(private httpClient:HttpClient) { }

  listOffre():Observable<Offre[]>{
    return this.httpClient.get<Offre[]>(`${this.baseURL}/getall`);
  }
listOfrre():Offre[]{
  return this.offres;
}

createOffre(offre: Offre): Observable<Offre>{
  return this.httpClient.post<Offre>(`${this.baseURL}/create`, offre);
}

getOffreByid (id: number):Observable<any>{
  return this.httpClient.get<Offre>(`${this.baseURL}/getOffreById/${id}`)
}

updateOffre(id: number, offre: Offre): Observable<Offre>{
  return this.httpClient.put<Offre>(`${this.baseURL}/update/${id}`, offre);
}

 
}
