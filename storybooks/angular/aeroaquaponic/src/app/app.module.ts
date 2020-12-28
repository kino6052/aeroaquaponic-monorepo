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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TypographyComponent, SectionComponent],
})
export class AppModule {}
