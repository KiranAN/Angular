import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn:'root'
})
export class Subjectservice{
    subject:Subject<any> = new Subject();

    getSubject(){
        return this.subject;
    }

}