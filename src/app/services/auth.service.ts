import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';


@Injectable({
    providedIn:'root'
})

export class AuthService{
    url:string = "api/UsersAuth"
    constructor(private _http:HttpClient) {        
    }

    login(loginReq: Object):Observable<any>{
        return this._http.post(`${environment.apiURL}/${this.url}/login`,loginReq);
    }

    IsUserLoggedIn():boolean{
        if(localStorage.getItem("UserId")){
            return true;
        };
        return false;
    }

    getAccessToken(){
        return localStorage.getItem("Token");
    }

    register(registerReq: Object):Observable<any>{
        return this._http.post(`${environment.apiURL}/${this.url}/register`,registerReq)
    }

    logOut(){
        localStorage.clear();
    }
}