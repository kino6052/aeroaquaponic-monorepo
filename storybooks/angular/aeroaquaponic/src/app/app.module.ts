import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypographyComponent } from './components/typography/typography.component';
import { SectionComponent } from './components/section/section.component';
import { ProjectsComponent } from './compounds/sections/projects/projects.component';
import { AboutComponent } from './compounds/sections/about/about.component';

@NgModule({
  declarations: [AppComponent, TypographyComponent, SectionComponent, ProjectsComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TypographyComponent, SectionComponent],
})
export class AppModule {}
