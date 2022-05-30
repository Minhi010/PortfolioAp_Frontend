import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ExpLaboral } from '../models/ExpLaboral';

@Injectable({
  providedIn: 'root',
})
export class ExpLaboralService {
  url: string = 'https://fast-brook-86948.herokuapp.com/explaboral';
  constructor(private http: HttpClient) {}

  getExpLaboral(): Observable<ExpLaboral> {
    return this.http.get<ExpLaboral>(this.url + '/all');
  }
  postExpLaboral(explaboral: ExpLaboral): Observable<ExpLaboral> {
    return this.http.post<ExpLaboral>(this.url + '/add', explaboral);
  }
  updateExpLaboral(explaboral: ExpLaboral): Observable<ExpLaboral> {
    return this.http.put<ExpLaboral>(this.url + '/update', explaboral);
  }
  deleteExpLaboral(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/delete/' + id);
  }
}
