import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/landing/home/home.component';
import { AdministratorLandingComponent } from './pages/landing/administrator-landing/administrator-landing.component';
import { EnterpriseLandingComponent } from './pages/landing/enterprise-landing/enterprise-landing.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdministratorLandingComponent,
    EnterpriseLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
