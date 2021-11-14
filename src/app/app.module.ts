import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentsBasicComponent } from './05-components-basic/components-basic/components-basic.component';
import { DashboardHeroComponent } from './06-input-output/dashboard-hero/dashboard-hero.component';
import { WelcomeComponent } from './07-component-with-sependencies/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsBasicComponent,
    DashboardHeroComponent,
    WelcomeComponent
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
