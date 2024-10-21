import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _accessToken: string = '';

  set accessToken(token: string) {
    this._accessToken = token;
  }

  get accessToken(): string {
    return this._accessToken;
  }
}
