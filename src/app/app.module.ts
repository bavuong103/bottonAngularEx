import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    //DragDropModule,
    CdkDrag,
    NzMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
