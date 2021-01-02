import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypographyComponent } from './components/typography/typography.component';
import { SectionComponent } from './components/section/section.component';
import { HeadingComponent } from './components/heading/heading.component';
import { ProjectsComponent } from './composites/sections/projects/projects.component';
import { AboutComponent } from './composites/sections/about/about.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { SpacerComponent } from './components/spacer/spacer.component';
import { ProfileCardContainerComponent } from './composites/profile-card-container/profile-card-container.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MainComponent } from './composites/sections/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageComponent } from './pages/page/page.component';
import { VideoComponent } from './components/video/video.component';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';
import { VideoModule } from './video/video.module';

@NgModule({
  declarations: [
    AppComponent,
    YouTubePlayer,
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
  ],
  imports: [BrowserModule, AppRoutingModule, VideoModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
