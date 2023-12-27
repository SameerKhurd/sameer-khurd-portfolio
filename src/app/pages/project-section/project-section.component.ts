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

  getImagePath(path: string): string {
    return `url(assets/images/projects/${path})`;
  }

  getLink(link: string | undefined): string {
    return link ? link : 'javascript:void(0)';
  }
}
