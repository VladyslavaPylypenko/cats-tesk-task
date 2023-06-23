import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { IBreed, ICat } from '../../../interfaces/cat.interface';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private apiKey = 'live_EE14sBT7qbpTrfNExZrKcDoLP0one4ys3942Qcik1Qt6EsMIzNCwwHp6R9yxs0qb';
  private headers = new HttpHeaders().set('x-api-key', this.apiKey);
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  getAllCats(limit: string): Observable<ICat[]> {
    return this.http.get<ICat[]>(`https://api.thecatapi.com/v1/images/search?limit=${limit}`, { headers: this.headers })
      .pipe(
        catchError(this.handleError.bind(this)) // Bind the context of the handleError function
      );
  }

  getCatsByBreed(breed: string, limit: string): Observable<ICat[]> {
    let query_params = {
      breed_ids: breed,
      limit: limit
    };
    return this.http.get<ICat[]>('https://api.thecatapi.com/v1/images/search', { headers: this.headers, params: query_params })
      .pipe(
        catchError(this.handleError.bind(this)) // Bind the context of the handleError function
      );
  }

  getBreeds(): Observable<IBreed[]> {
    return this.http.get<IBreed[]>('https://api.thecatapi.com/v1/breeds/')
      .pipe(
        catchError(this.handleError.bind(this)) // Bind the context of the handleError function
      );
  }

  private handleError(error: Error): Observable<never> {
    console.error('An error occurred:', error);

    this._snackBar.open('Something went wrong. Please reload the page.',
      'close', { verticalPosition: this.verticalPosition });

    return throwError('Something went wrong. Please reload the page.');
  }
}
