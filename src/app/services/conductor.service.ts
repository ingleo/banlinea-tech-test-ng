import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Conductor } from '../models/conductor';
import { tap, catchError } from 'rxjs/operators';
import { of } from "rxjs/observable/of";


@Injectable()
export class ConductorService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  private productsURI = 'http://192.168.0.3:3000/v1/conductores';

  constructor(private _httpClient: HttpClient) { }

  /**
  * Funcion para llamar a servicio y obtener conductores
  * @return array de Conductores
  */
  getConductores(): Observable<Conductor[]> {
    return this._httpClient.get<Conductor[]>(this.productsURI)
      .pipe(
        catchError(this.handleError<Conductor[]>('getConductores', []))
      )
  }

  /**
  * Funcion para llamar a servicio y obtener conductores
  * @param {Conductor}  
  * @return array de Conductores
  */
  createConductor(conductor: Conductor): Observable<Conductor> {
    return this._httpClient.post<Conductor>(this.productsURI, JSON.stringify(conductor), { headers: this.headers })
      .pipe(
        catchError(this.handleError<Conductor>('createConductor'))
      );
  }

  /**
  * Funcion para manejo de error
  * @param {string, T}  
  * @return Observable de tipo de error
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
