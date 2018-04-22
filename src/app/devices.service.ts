import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap} from 'rxjs/operators';

import { MessageService } from './message.service';
import { Device } from './device';


@Injectable()
export class DevicesService {

  private devicesUrl = 'https://gentle-springs-27762.herokuapp.com/api/devices';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getDevices(parameters): Observable<Device[]> {
    return this.http.get<Device[]>(this.devicesUrl, {
      params: Object.assign({limit: '50'}, parameters)
    })
    .pipe(
      map(devices => devices['phones']),
      tap(devices => this.log('fetched devices')),
      catchError(this.handleError('getDevices', []))
    );
  }

  getDevice(slug: string): Observable<Device> {
    const url = `${this.devicesUrl}/${slug}`;
    this.log(url);
    return this.http.get<Device>(url).pipe(
      map(device => device['phone']),
      tap(_ => this.log(`fetched device slug=${slug}`)),
      catchError(this.handleError<Device>(`getDevice slug=${slug}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any):Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add('DevicesService: ' + message);
  }

}
