import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EduFormal } from '../models/EduFormal';

@Injectable({
  providedIn: 'root',
})
export class EduFormalService {
  url: string = 'http://localhost:8080/eduformal';
  constructor(private http: HttpClient) {}
  getEduformal(): Observable<EduFormal> {
    return this.http.get<EduFormal>(this.url + '/all');
  }
  postEduformal(eduFormal: EduFormal): Observable<EduFormal> {
    return this.http.post<EduFormal>(this.url + '/add', eduFormal);
  }
  updateEduformal(eduFormal: EduFormal): Observable<EduFormal> {
    return this.http.put<EduFormal>(this.url + '/update', eduFormal);
  }
  deleteEduformal(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/delete/' + id);
  }
}
