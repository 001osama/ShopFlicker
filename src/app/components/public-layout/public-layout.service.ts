import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "src/app/services/base.service";

@Injectable({
    providedIn: 'root'
})

export class PublicLayoutService extends BaseService{
    url="api/Products";
    constructor(httpClient: HttpClient) {
        super(httpClient);
    }

    
    getProducts(search?:string){
        if(search){
            return this.get(`${this.url}?search=${search}`);
        }
        return this.get(this.url);
    }
}