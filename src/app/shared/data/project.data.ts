import { Project } from '../interfaces/project.interface';

export const projects: Project[] = [
  {
    title: 'AlgoBytes: LeetCode-like Coding Platform [Full Stack]',
    endDate: 'May 2024',
    imagePath: 'algobytes-banner.png',
    details: [
      'Full Stack LeetCode-like platform for coding challenges, featuring user, question, code, submission management and execution functionalities, demonstrating scalable system design.',
    ],
    technologies: [
      'GCP Cloud Functions (Serverless)',
      'Angular',
      'GCP Firestore (NoSQL)',
      'Python',
      'Firebase Hosting',
    ],
    demoLink: 'https://algobytes.web.app/',
    githubLink: 'https://github.com/SameerKhurd/algo-bytes',
    blog: 'https://github.com/SameerKhurd/algo-bytes',
  },
  {
    title: 'COVID-19 India Dashboard Cross-Platform App',
    endDate: 'Jul 2021',
    imagePath: 'cil_ln_img.png',
    details: [
      'Cross platform app (iOS, Android, PWA) showing COVID-19 statistics of India, with features like - Cumulative/Daily view, Map view, Sorting options for all categories, and Percentage-wise statistics.',
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
      'Web application to visualize District Mental Health Program (DMHP) data from the Government of Karnataka and NIMHANS Hospital, Bangalore.',
      'Multiple dashboards with D3 charts and maps, along with features like filtering, sorting, drill-down, and time-based analysis.',
    ],
    technologies: ['Angular', 'Node.js', 'D3.js', 'MySQL', 'AWS'],
  },
  {
    title: 'COVID-19 Patient Tracking System ',
    endDate: 'May 2021',
    details: [
      'Web application developed using various DevOps tools, which tracks infected and non-infected people on google map, based on their travel history.',
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
