import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HsmService {

  constructor(private http: HttpClient) {
  }

  fetchTemplates(): Observable<any[]> {
    return this.http.get<{ data: { templates: any[] }[] }>('http://localhost:3003/')
      .pipe(
        map(response => response.data.flatMap(item => item.templates)),
        catchError(error => this.errorHandler(error)));
  }

  errorHandler(error: any) {
    return throwError(() => new Error(`Error: ${error.message}`));
  }
}
