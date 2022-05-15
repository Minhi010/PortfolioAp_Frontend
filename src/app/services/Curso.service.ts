import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../models/Curso';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  url: string = 'http://localhost:8080/cursos';
  constructor(private http: HttpClient) {}

  getCurso(): Observable<Curso> {
    return this.http.get<Curso>(this.url + '/all');
  }
  postCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.url + '/add', curso);
  }
  updateCurso(curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(this.url + '/update', curso);
  }
  deleteCurso(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/delete/' + id);
  }
}
