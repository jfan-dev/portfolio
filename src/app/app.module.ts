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
import { PortfolioCardComponent } from './home/portfolio/portfolio-card/portfolio-card.component';
import { ExpertiseComponent } from './home/expertise/expertise.component';
import { SkillTagComponent } from './home/expertise/skill-tag/skill-tag.component';
import { FooterComponent } from './footer/footer.component';
import { FooterContentComponent } from './footer/footer-content/footer-content.component';
import { FooterFormComponent } from './footer/footer-content/footer-form/footer-form.component';
import { FooterLinksComponent } from './footer/footer-content/footer-links/footer-links.component';
import { FooterSocialComponent } from './footer/footer-content/footer-social/footer-social.component';
import { FooterLogoComponent } from './footer/footer-content/footer-logo/footer-logo.component';

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
    PortfolioComponent,
    PortfolioCardComponent,
    ExpertiseComponent,
    SkillTagComponent,
    FooterComponent,
    FooterContentComponent,
    FooterFormComponent,
    FooterLinksComponent,
    FooterSocialComponent,
    FooterLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
