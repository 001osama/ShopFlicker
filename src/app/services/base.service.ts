import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment.development';
import { APIResponse } from '../models/apiResponse';

@Injectable({
  providedIn: 'root'
})


export class BaseService {
  
  url="api/Products";
  apiUrl=environment.apiURL;
  constructor(private readonly http: HttpClient) { }

  public get(search?: string | null, pageSize: number = 8, pageNumber:number = 1): Observable<APIResponse<Product[]>> {
    const params = {
      search: search || '',
      pageSize: pageSize,
      pageNumber: pageNumber
    }
    return this.http.get<APIResponse<Product[]>>(`${this.apiUrl}/${this.url}`, {params});
  }
}
