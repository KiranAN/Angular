import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-comp',
  templateUrl: './widget-comp.component.html',
  styleUrls: ['./widget-comp.component.scss']
})
export class WidgetCompComponent implements OnInit {
  map:any ={'key':'','value':''};
  constructor() { 

  }
  @Input() item:any;
  ngOnInit(): void {
    for(let prop in this.item){
      this.map.key= prop;
      this.map.value = this.item[prop];
    }    
  }

}
