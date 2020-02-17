import { Component, OnInit } from '@angular/core';
import { appobserver } from './app-observer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'widget';
  arr:Array<any> = [];
  constructor(private observer:appobserver){

  }

  ngOnInit(): void{
    this.arr =[{'abc':123},{'def':345},{'geh':456}];    
    this.observer.get(1);
  }

}
