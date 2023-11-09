import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class LoaderService{
    loader = new BehaviorSubject(true);
    public loaderStatus = this.loader.asObservable();

    showLoader(){
        this.loader.next(true);
    }
    
    hideLoader(){
        this.loader.next(false);
    }
}