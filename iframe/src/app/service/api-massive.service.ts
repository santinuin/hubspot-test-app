import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiMassiveService {

  constructor(private http: HttpClient) {
  }

  login(loginData: any): Observable <any> {
    return this.http.post<any>('https://condor-dev.chattigo.com/api-massive/message/login', loginData)
      .pipe(
        catchError(error => this.errorHandler(error)));
  }

  fetchTemplates(): Observable<any[]> {
    return this.http.get<{ data: { templates: any[] }[] }>('http://localhost:3003/')
      .pipe(
        map(response => response.data.flatMap(item => item.templates)),
        catchError(error => this.errorHandler(error)));
  }

  sendHsm(hsmData: any, headers: HttpHeaders): Observable<any> {
    return this.http.post('https://condor-dev.chattigo.com/api-massive/message/inbound', hsmData, {headers})
      .pipe(catchError(error => this.errorHandler(error)));
  }

  errorHandler(error: any) {
    return throwError(() => new Error(`Error: ${error.message}`));
  }
}
