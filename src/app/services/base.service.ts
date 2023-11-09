import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  
  constructor(private readonly _http: HttpClient) { }

  get(url: string, optionalParam?:any): Observable<any> {
    return this._http.get(`${environment.apiURL}/${url}`, optionalParam);
  }

  post(url: string, data:any, optionalParam?:any): Observable<any> {
    return this._http.post(`${environment.apiURL}/${url}`,data, optionalParam);
  }

  put(url: string, data:any, optionalParam?:any): Observable<any> {
    return this._http.put(`${environment.apiURL}/${url}`,data, optionalParam);
  }

  delete(url: string, optionalParam?:any): Observable<any> {
    return this._http.delete(`${environment.apiURL}/${url}`, optionalParam);
  }
}
