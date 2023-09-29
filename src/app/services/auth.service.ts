import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';


@Injectable()

export class AuthService{
    url:string = "api/UsersAuth"
    constructor(private _http:HttpClient) {        
    }

    public login(loginReq: Object):Observable<any>{
        return this._http.post(`${environment.apiURL}/${this.url}/login`,loginReq);
    }

    public IsUserLoggedIn():boolean{
        if(localStorage.getItem("UserId")){
            return true;
        };
        return false;
    }

    public getAccessToken(){
        return localStorage.getItem("Token");
    }

    public register(registerReq: Object):Observable<any>{
        return this._http.post(`${environment.apiURL}/${this.url}/register`,registerReq)
    }
}