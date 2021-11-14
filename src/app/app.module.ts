import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentsBasicComponent } from './05-components-basic/components-basic/components-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
