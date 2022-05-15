import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Eduformal } from '../models/EduFormal';

@Injectable({
  providedIn: 'root',
})
export class EduFormalService {
  url: string = 'http://localhost:8080/eduformal';
  constructor(private http: HttpClient) {}
  getEduformal(): Observable<Eduformal> {
    return this.http.get<Eduformal>(this.url + '/all');
  }
  postEduformal(eduformal: Eduformal): Observable<Eduformal> {
    return this.http.post<Eduformal>(this.url + '/add', eduformal);
  }
  updateEduformal(eduformal: Eduformal): Observable<Eduformal> {
    return this.http.put<Eduformal>(this.url + '/update', eduformal);
  }
  deleteEduformal(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/delete/' + id);
  }
}
