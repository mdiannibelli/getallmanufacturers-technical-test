import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import {
  GetManufacturerResponse,
  Manufacturers,
} from '../interfaces/get-manufacturers.interface';

@Injectable({
  providedIn: 'root',
})
export class ManufacturerService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/manufacturers';

  getManufacturers(): Observable<Manufacturers[]> {
    return this.http.get<GetManufacturerResponse>(this.baseUrl).pipe(
      map((response) => response.results),
      catchError((error) => {
        console.log('Error at fetfching', error);
        return throwError(() => new Error('Can not obtain manufacturers'));
      })
    );
  }
}
