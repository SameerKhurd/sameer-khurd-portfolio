import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroductionSectionComponent } from './pages/introduction-section/introduction-section.component';
import { ExperienceSectionComponent } from './pages/experience-section/experience-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroductionSectionComponent,
    ExperienceSectionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
