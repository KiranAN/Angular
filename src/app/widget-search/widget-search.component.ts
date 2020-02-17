import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-search',
  templateUrl: './widget-search.component.html',
  styleUrls: ['./widget-search.component.scss']
})
export class WidgetSearchComponent implements OnInit {
  searchValue:string;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    
  }
  
  search():void{
    console.log(this.searchValue);
  }
}
