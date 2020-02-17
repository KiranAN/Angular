import { Observable } from 'rxjs';
import { appObservable } from 'src/services/appobservable';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class appobserver{
    constructor(private observableService:appObservable){
    }

    get(val?:any){
        return this.observableService.getObservable(val).subscribe(
            val=>this.onSuccess(val),
            err=>this.onError(err),
            this.onComplete
        )
    }
    
    setSuccess(successCallback:any){
        this.onSuccess = successCallback || this.onSuccess;
    }

    onSuccess(val:any){
        console.log(val + 1); 
    }

    onError(err:any){
        console.error(err);
    }

    onComplete(){
        console.log("observe complete");
    }
}