import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction-section',
  templateUrl: './introduction-section.component.html',
  styleUrls: ['./introduction-section.component.scss'],
})
export class IntroductionSectionComponent {
  tools: { label: string; icon: string }[] = [
    {
      label: 'Angular',
      icon: 'angular-icon.svg',
    },
    {
      label: 'Python',
      icon: 'python-icon.svg',
    },
    {
      label: 'Java',
      icon: 'java-icon.svg',
    },
    {
      label: 'AWS',
      icon: 'aws-icon.svg',
    },
    {
      label: 'Docker',
      icon: 'docker-icon.svg',
    },
    {
      label: 'Kubernetes',
      icon: 'kubernets-icon.svg',
    },
    {
      label: 'Microservices',
      icon: 'microservices-icon.png',
    },
    {
      label: 'Javascript',
      icon: 'javascript-icon.svg',
    },
    {
      label: 'Git',
      icon: 'git-icon.svg',
    },

    {
      label: 'Flask',
      icon: 'flask-icon.svg',
    },

    {
      label: 'Node.js',
      icon: 'nodejs-icon-2.png',
    },

    {
      label: 'HTML',
      icon: 'html-5-icon.svg',
    },
    {
      label: 'CSS',
      icon: 'css-3-icon.svg',
    },

    {
      label: 'UI/UX',
      icon: 'ui-ux-icon-1.png',
    },
    {
      label: 'MySQL',
      icon: 'mysql-icon.svg',
    },
    {
      label: 'CI/CD',
      icon: 'ci-cd-icon.svg',
    },
  ];
}
