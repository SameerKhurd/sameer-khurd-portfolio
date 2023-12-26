import { Component } from '@angular/core';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss'],
})
export class ProjectSectionComponent {
  projects: {
    title: string;
    endDate: string;
    imagePath?: string;
    details: string[];
    technologies?: string[];
    demoLink?: string;
    githubLink?: string;
  }[] = [
    {
      title: 'COVID-19 India Dashboard Cross-Platform App',
      endDate: 'Jul 2021',
      imagePath: 'cil_ln_img.png',
      details: [
        ' User-friendly app displaying COVID-19 statistics for Indian states and the country as a whole, utilizing D3 charts and maps.',
        'Features include - Cumulative/Daily view, Map view, Sorting options for all categories, and Percentage-wise statistics.',
        'Cross platform application for iOS, Android, and as a Progressive Web App (PWA).',
      ],
      technologies: [
        'Ionic Cross-Platform Framework',
        'Angular',
        'D3.js',
        'GraphQL',
        'Google Firebase',
      ],
      demoLink: 'https://covid-india-live.firebaseapp.com/',
      githubLink: 'https://github.com/SameerKhurd/Covid-India-Live',
    },
    {
      title: 'Visualization of DMHP Project Data (Karnataka State)',
      endDate: 'Jun 2021',
      details: [
        'Developed a web application to visualize District Mental Health Program (DMHP) data from the Government of Karnataka and NIMHANS Hospital, Bangalore.',
        'The application features multiple dashboards that employ D3 charts and maps, offering functions such as filtering, sorting, drill-down, and time-based analysis.',
        'Emphasis was placed on creating reusable widgets/components for versatile data visualization.',
        'Designed and implemented backend RESTful APIs using Node.js.',
      ],
      technologies: ['Angular', 'Node.js', 'D3.js', 'MySQL', 'AWS'],
    },
    {
      title: 'COVID-19 Patient Tracking System ',
      endDate: 'May 2021',
      details: [
        'Web application developed using various DevOps tools, which tracks infected and non-infected people on google map, based on their travel history.',
        'Backend RESTful APIs using NodeJs',
      ],
      technologies: [
        'Angular',
        'Node.js',
        'Chef',
        'Jenkins',
        'Rundeck (Docker Container)',
        'Elastic-Logstash-Kibana',
        'Git',
        'MySQL',
        'Jasmine-Karma',
      ],
    },
  ];
}
