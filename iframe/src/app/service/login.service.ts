import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginData: any): Observable <any> {
    return this.http.post<any>('https://condor-dev.chattigo.com/api-massive/message/login', loginData)
      .pipe(
        catchError(error => this.errorHandler(error)));
  }

  errorHandler(error: any) {
    return throwError(() => new Error(`Error: ${error.message}`));
  }
}
