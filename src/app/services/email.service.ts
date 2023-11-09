import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment.development';
import { ContactUsRequest } from "../models/contactUsRequest";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class EmailService{
    private url:string = 'api/Email';

    constructor(private _http:HttpClient) {}

    subscription(email:string):Observable<any>{
        const requestData = { email: email };
        return this._http.post(`${environment.apiURL}/${this.url}/subscribe`,requestData);
    }

    contactUs(contactUsRequest:ContactUsRequest):Observable<any>{
        return this._http.post(`${environment.apiURL}/${this.url}/emailMessage`,contactUsRequest);
    }
}