import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginDTO } from '../models/loginDTO';

const USERNAME_KEY = 'authUsername';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'https://fast-brook-86948.herokuapp.com/auth/';
  constructor(private httpClient: HttpClient) {}

  public login(loginDTO: LoginDTO): Observable<boolean> {
    return this.httpClient.post<boolean>(this.url + 'login', loginDTO).pipe(
      tap((result) => {
        if (result) {
          this.setUserName(loginDTO.usuario);
        }
      })
    );
  }
  private setUserName(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }
  public getUserName(): string | null {
    return window.sessionStorage.getItem(USERNAME_KEY);
  }
  public logout() {
    window.sessionStorage.clear();
  }
  public isLoggedIn(): boolean {
    return this.getUserName() !== null;
  }
}
