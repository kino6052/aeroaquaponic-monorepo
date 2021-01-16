import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeadingComponent } from './components/heading/heading.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { SectionComponent } from './components/section/section.component';
import { SpacerComponent } from './components/spacer/spacer.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ProfileCardContainerComponent } from './composites/profile-card-container/profile-card-container.component';
import { AboutComponent } from './composites/sections/about/about.component';
import { MainComponent } from './composites/sections/main/main.component';
import { ProjectsComponent } from './composites/sections/projects/projects.component';
import { PageComponent } from './pages/page/page.component';
import { VideoModule } from './video/video.module';
import { CardComponent } from './components/card/card.component';
import { CardsContainerComponent } from './composites/cards-container/cards-container.component';
import { OverviewComponent } from './composites/sections/overview/overview.component';
import { DonateComponent } from './composites/sections/donate/donate.component';
import { FooterComponent } from './composites/footer/footer.component';
import { SocialComponent } from './composites/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    SectionComponent,
    ProjectsComponent,
    AboutComponent,
    HeadingComponent,
    ProfileCardComponent,
    SpacerComponent,
    ProfileCardContainerComponent,
    TimelineComponent,
    MainComponent,
    MenuComponent,
    PageComponent,
    ButtonComponent,
    CardComponent,
    CardsContainerComponent,
    OverviewComponent,
    DonateComponent,
    FooterComponent,
    SocialComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, VideoModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
