import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavElementComponent } from './navigation/nav-element/nav-element.component';
import { NavLogoComponent } from './navigation/nav-logo/nav-logo.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './navigation/nav-menu/nav-menu.component';
import { NavElementContainerComponent } from './navigation/nav-element-container/nav-element-container.component';
import { NavContainerComponent } from './navigation/nav-container/nav-container.component';
import { HomeHeroComponent } from './home/home-hero/home-hero.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavElementComponent,
    NavLogoComponent,
    HomeComponent,
    NavMenuComponent,
    NavElementContainerComponent,
    NavContainerComponent,
    HomeHeroComponent,
    AboutMeComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
