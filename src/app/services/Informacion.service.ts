import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Informacion } from '../models/Informacion';

@Injectable({
  providedIn: 'root',
})
export class InformacionService {
  url: string = 'https://fast-brook-86948.herokuapp.com/informacion';
  constructor(private http: HttpClient) {}
  getInformacion(): Observable<Informacion> {
    return this.http.get<Informacion>(this.url + '/all');
  }
  postInformacion(informacion: Informacion): Observable<Informacion> {
    return this.http.post<Informacion>(this.url + '/add', informacion);
  }
  updateInformacion(informacion: Informacion): Observable<Informacion> {
    return this.http.put<Informacion>(this.url + '/update', informacion);
  }
  deleteInformacion(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/delete/' + id);
  }
}
