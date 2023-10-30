import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavElementComponent } from './navigation/nav-element/nav-element.component';
import { NavLogoComponent } from './navigation/nav-logo/nav-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavElementComponent,
    NavLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
