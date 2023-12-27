import { Component } from '@angular/core';
import { Experience } from 'src/app/shared/interfaces/experience.interface';
import { experiences } from 'src/app/shared/data/experience.data';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
})
export class ExperienceSectionComponent {
  experiences: Experience[] = experiences;
}
