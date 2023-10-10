import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class LoaderService{
    loader = new BehaviorSubject(true);



    showLoader(){
        this.loader.next(true);
    }

    loaderStatus(){
        return this.loader.asObservable();
    }
    
    hideLoader(){
        this.loader.next(false);
    }
}