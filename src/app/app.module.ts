import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetCompComponent } from './widget/widget-comp/widget-comp.component';
import { WidgetSearchComponent } from './widget-search/widget-search.component';
import {MatFormField} from '@angular/material/form-field';
import {MatSliderModule } from '@angular/material/slider';
@NgModule({
  declarations: [
    AppComponent,
    WidgetCompComponent,
    WidgetSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatSliderModule              
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
