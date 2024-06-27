import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
})
export class SkillsSectionComponent {
  skillsTables: { title: string; skills: string }[] = [
    {
      title: 'Languages',
      skills: 'Python, Java, C, JavaScript, TypeScript',
    },
    {
      title: 'Frontend',
      skills:
        'Angular, Fabric.js, D3.js, HTML, CSS, Bootstrap, Ionic Framework',
    },
    {
      title: 'Backend',
      skills:
        'Connexion, Flask, Node.js, FastAPI, REST API, RabbitMQ, OpenAPI Specification, Nginx',
    },
    {
      title: 'CI/CD',
      skills: 'Git, Docker, GitLab, Jenkins',
    },
    {
      title: 'AWS',
      skills: 'EC2, S3, CloudWatch, ECS, RDS, Lambda, Textract, EFS, Step-functions, ELB, Route 53 ',
    },
    {
      title: 'Database/ORM',
      skills: 'MySQL, Postgres, GCP Firestore (NoSQL), SQLALchemy',
    },
    {
      title: 'Others',
      skills: 'Firebase, Unit & Integration Testing, Cookie-cutter, Postman, OOP, Clean code, Agile',
    },
  ];

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
