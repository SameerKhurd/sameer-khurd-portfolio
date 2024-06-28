import { Project } from '../interfaces/project.interface';

export const projects: Project[] = [
  {
    title: 'ZenMeet: Video Conferencing Platform',
    endDate: 'Jun 2024',
    imagePath: 'zenmeet-banner.png',
    details: [
      'MS Teams/Zoom/Google Meet like platform, create meeting rooms, video and audio calls, messaging, screen sharing, sending reactions, raise hand.',
    ],
    technologies: [
      'WebRTC',
      'Pub-Sub channels',
      'GCP Firestore (NoSQL)',
      'Angular',
      'Firebase Hosting',
    ],
    demoLink: 'https://zenmeet.web.app/',
    githubLink: 'https://github.com/SameerKhurd/zen-meet',
    blog: 'https://medium.com/@sameerkhurd/from-design-to-demo-building-a-full-stack-video-conferencing-platform-like-zoom-microsoft-teams-761ec676d237',
  },
  {
    title: 'AlgoBytes: Scalable Online Judge',
    endDate: 'May 2024',
    imagePath: 'algobytes-banner.png',
    details: [
      'LeetCode like platform, code submission and execution module, user progress tracking and statistics, question bookmarking, history.',
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
    blog: 'https://medium.com/@sameerkhurd/from-design-to-demo-building-a-full-stack-leetcode-like-platform-with-system-design-4c86d61f398a',
  },
  {
    title: 'COVID-19 India Dashboard Cross-Platform Mobile App',
    endDate: 'Jul 2021',
    imagePath: 'cil_ln_img.png',
    details: [
      'Cross platform app (iOS, Android, PWA) showing COVID-19 statistics of India, with visualization dashboards, time-based statistics, maps, category filters., and Percentage-wise statistics.',
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
