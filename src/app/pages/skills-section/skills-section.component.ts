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
      skills: 'Java, Python, JavaScript, TypeScript, SQL, C',
    },
    {
      title: 'Backend',
      skills:
        'Flask, Spring Boot, Node.js, FastAPI, Kafka, RabbitMQ, REST API, OpenAPI, Nginx',
    },
    {
      title: 'CI/CD',
      skills: 'Git, Docker, GitLab, Jenkins',
    },
    {
      title: 'AWS',
      skills:
        'EC2, S3, CloudWatch, ECS, RDS, Lambda, Textract, EFS, Step-functions, ELB, Route 53 ',
    },
    {
      title: 'Database/ORM',
      skills: 'MySQL, Postgres, GCP Firestore (NoSQL), SQLALchemy',
    },
    {
      title: 'Frontend',
      skills:
        'Angular, Fabric.js, D3.js, HTML, CSS, Bootstrap, Ionic Framework',
    },
    {
      title: 'Others',
      skills:
        'Design Patterns, OOP, Firebase, Unit & Integration Testing, Cookie-cutter, Postman, Clean code, Agile',
    },
  ];

  tools: { label: string; icon: string }[] = [
    {
      label: 'HTML',
      icon: 'html-5-icon.svg',
    },
    {
      label: 'CSS',
      icon: 'css-3-icon.svg',
    },
    {
      label: 'Node.js',
      icon: 'nodejs-icon-2.png',
    },
    {
      label: 'Javascript',
      icon: 'javascript-icon.svg',
    },
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
      label: 'Firebase',
      icon: 'firebase-icon.png',
    },
    {
      label: 'Microservices',
      icon: 'microservices-icon.png',
    },
    {
      label: 'Flask',
      icon: 'flask-icon.svg',
    },
    {
      label: 'MySQL',
      icon: 'mysql-icon.svg',
    },
    {
      label: 'Docker',
      icon: 'docker-icon.svg',
    },
    {
      label: 'Git',
      icon: 'git-icon.svg',
    },

    {
      label: 'UI/UX',
      icon: 'ui-ux-icon-1.png',
    },

    {
      label: 'CI/CD',
      icon: 'ci-cd-icon.svg',
    },
  ];
}
