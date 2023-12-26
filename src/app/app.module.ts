import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroductionSectionComponent } from './pages/introduction-section/introduction-section.component';
import { ExperienceSectionComponent } from './pages/experience-section/experience-section.component';
import { ProjectSectionComponent } from './pages/project-section/project-section.component';
import { EducationSectionComponent } from './pages/education-section/education-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroductionSectionComponent,
    ExperienceSectionComponent,
    ProjectSectionComponent,
    EducationSectionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
