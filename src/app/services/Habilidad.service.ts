import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Habilidad } from '../models/Habilidad';

@Injectable({
  providedIn: 'root',
})
export class HabilidadService {
  url: string = 'http://localhost:8080/habilidades';
  constructor(private http: HttpClient) {}

  getHabilidad(): Observable<Habilidad> {
    return this.http.get<Habilidad>(this.url + '/all');
  }
  postHabilidad(habilidad: Habilidad): Observable<Habilidad> {
    return this.http.post<Habilidad>(this.url, habilidad);
  }
  updateHabilidad(habilidad: Habilidad): Observable<Habilidad> {
    return this.http.put<Habilidad>(this.url, habilidad);
  }
  deleteHabilidad(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id);
  }
}
