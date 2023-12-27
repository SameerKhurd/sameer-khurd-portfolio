import { Experience } from '../interfaces/experience.interface';

export const experiences: Experience[] = [
  {
    company: 'Siemens Technology India',
    location: 'Bengaluru, India',
    roles: [
      {
        designation: 'Research Engineer',
        startMonth: 'Aug 2021',
        endMonth: '*Current',
        duration: '(2.5 years)',
        details: [
          'Skills: Docker · RESTful WebServices · Angular · Flask · Fabric.js ·          Full-Stack Development · Amazon Web Services (AWS) · Microservices ·          DevOps · Kubernetes',
        ],
      },
      {
        designation: 'Research Intern',
        startMonth: 'Dec 2020',
        endMonth: 'Jun 2021',
        duration: '(6 months)',
        details: [
          ' Demonstrated proficiency in full-stack development by crafting RESTful           APIs with Flask (Python) on the backend and creating interactive           frontends with the Angular Framework.',
          'Successfully contributed to projects involving Micro-Service            Architecture, emphasizing scalability and modularity.',
          ' Conducted comprehensive end-to-end user acceptance testing, ensuring            the delivery of high-quality, user-centric solutions.',
          'Employed modern development practices, including Cookie-cutter            templates, OpenAPI specifications, Pytest, and Docker, to optimize development workflows.',
          'Applied full-stack skills across multiple projects, showcasing             adaptability and versatility in tackling diverse challenges.',
        ],
      },
    ],
  },
  {
    company: 'Veritas Technologies LLC',
    location: 'Pune, India',
    roles: [
      {
        designation: 'Software Development Engineer - Intern',
        startMonth: 'Jan 2018',
        endMonth: 'Jun 2018',
        duration: '(6 months)',
        details: [
          ' Developed a solution to identify missing inode flags and extended attributes during file backup and restoration across different file systems',
          ' Implemented a solution to safeguard inode flags and extended attributes during file backups, ensuring data integrity',
          ' Implemented a masking logic mechanism to enable secure and efficient cross-file system restores',
          ' Technologies used : C, C++ and Python',
        ],
      },
    ],
  },
];
