import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, Subject, tap, timeout } from 'rxjs';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  url: string = 'https://fast-brook-86948.herokuapp.com/persona';
  persona!: Persona;

  termineCarga = false;
  constructor(private http: HttpClient) {}

  getMiperfil(): Observable<Persona> {
    return this.http.get<Persona>(this.url + '/miperfil').pipe(
      timeout({ each: 10000 }),
      map((p) => p)
    );
  }
  getPersonas(): Observable<Persona> {
    return this.http.get<Persona>(this.url + '/all');
  }
  postPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.url + '/add', persona);
  }
  getMiPersona(): Observable<Persona> {
    if (this.persona) {
      return of(this.persona);
    } else {
      return this.getMiperfil().pipe(
        tap((persona) => (this.persona = persona))
      );
    }
  }
}
