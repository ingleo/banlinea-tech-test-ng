import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Conductor } from '../models/conductor';
import { tap, catchError } from 'rxjs/operators';
import { of } from "rxjs/observable/of";


@Injectable()
export class ConductorService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private _httpClient: HttpClient) { }


  getConductores(): Observable<Conductor[]> {
    return this._httpClient.get<Conductor[]>('http://192.168.0.3:3000/v1/conductores')
      .pipe(
        tap(coductores => console.log(`fetched users`)),
        catchError(this.handleError('getConductores', []))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('ConductorService: ' + message);
  }
}
