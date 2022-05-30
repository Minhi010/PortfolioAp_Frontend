import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/Proyecto';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  url: string = 'https://fast-brook-86948.herokuapp.com/proyectos';
  constructor(private http: HttpClient) {}

  getProyecto(): Observable<Proyecto> {
    return this.http.get<Proyecto>(this.url + '/all');
  }
  postProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.url + '/add', proyecto);
  }
  updateProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(this.url + '/update', proyecto);
  }
  deleteProyecto(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/delete/' + id);
  }
}
