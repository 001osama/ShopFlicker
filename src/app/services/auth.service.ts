import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';


@Injectable({
    providedIn:'root'
})

export class AuthService{
    url:string = "api/UsersAuth"
    isLoggedIn$ = new BehaviorSubject<boolean>(false);

    constructor(private _http:HttpClient) { 
        if(this.IsUserLoggedIn()){
            this.loggedIn();       
        }
    }
//to check user status with observable for dynamic rendering
    userStatus$(){
        return this.isLoggedIn$.asObservable();
    }

    login(loginReq: Object):Observable<any>{
        return this._http.post(`${environment.apiURL}/${this.url}/login`,loginReq);
    }
    
    loggedIn(){
        this.isLoggedIn$.next(true);
    }
//to check user status without observable
    IsUserLoggedIn():boolean{
        if(this.getAccessToken()){
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
        this.isLoggedIn$.next(false);
    }
}