import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCompComponent } from './widget-comp.component';

describe('WidgetCompComponent', () => {
  let component: WidgetCompComponent;
  let fixture: ComponentFixture<WidgetCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
