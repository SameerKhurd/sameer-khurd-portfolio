import { Component } from '@angular/core';
import { Project } from 'src/app/shared/interfaces/project.interface';
import { projects } from 'src/app/shared/data/project.data';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss'],
})
export class ProjectSectionComponent {
  projects: Project[] = projects;
}
