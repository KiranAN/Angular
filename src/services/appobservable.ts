import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Subjectservice } from './subjectservice';

@Injectable({
    providedIn:'root'
})
export class appObservable {    
    constructor(private subject:Subjectservice){

    }
    getObservable<T>(value?:any){
        return new Observable<T>(observer =>{
            observer.next(value);            
        });
    }

    getSubject():Subject<any>{
        return this.subject.getSubject();
    }
}