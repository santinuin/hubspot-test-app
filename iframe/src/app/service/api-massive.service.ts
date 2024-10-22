import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {jwtDecode } from "jwt-decode";

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

  fetchTemplates(token: string): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const decodedToken: any = jwtDecode(token);
    const idClient = decodedToken.idClient;

    return this.http.get<{ data: { templates: any[] }[] }>(`https://condor-dev.chattigo.com/api-massive/message/templates/client_id/${idClient}`, {headers})
      .pipe(
        map(response => response.data),
        catchError(error => this.errorHandler(error)));
  }

  sendInboundHsm(inboundData: any, headers: HttpHeaders): Observable<any> {
    return this.http.post('https://condor-dev.chattigo.com/api-massive/message/inbound', inboundData, {headers})
      .pipe(catchError(error => this.errorHandler(error)));
  }

  errorHandler(error: any) {
    return throwError(() => new Error(`Error: ${error.message}`));
  }
}

