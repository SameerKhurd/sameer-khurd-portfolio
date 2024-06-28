import { Experience } from '../interfaces/experience.interface';

export const experiences: Experience[] = [
  {
    company: 'Siemens Technology',
    companyLogoUrl: 'assets/images/company-logo/siemens-logo.jpeg',
    companyWebsite: 'https://www.siemens.com/',
    location: 'Bengaluru, India',
    roles: [
      {
        designation: 'Research Engineer - Full Stack',
        startMonth: 'Aug 2021',
        endMonth: 'May 2024',
        duration: '(2.9 years)',
        details: [
          'Demonstrated exceptional Full Stack development skills by Leading the frontend development for 15+ Web Applications and UIs across multiple projects, primarily using Angular framework, covering - multiple dashboards, configuration platforms, chatbot apps, review and labeling tools, and chart components and Utilizing my expertise in microservices development by successfully developing and deploying 10+ microservices featuring multiple RESTful APIs, using Python frameworks on the backend and backed by GitLab CI/CD pipelines, integrating various AI/ML, GenAl and Knowledge Graph projects.',
          'Developed Workflow Management Microservice for managing data pipelines for a multi-stakeholder AI-driven data extraction platform, providing easy integration of third-party workflow engines like AWS Step Functions and Apache Airflow as plug-in components, and enabling non-linear workflows support for the platform.',
          'Developed Review and Validation Tool using Angular and Fabric.js components, prioritizing UX, to streamline the review process of large AI-extracted data, by allowing users to view extracted results on Canvas, review them, annotate incorrect data, and add missed data with user-friendly controls, helping reduce manual extraction efforts.',
          'Implemented a simple active learning loop and basic end-to-end MLOps pipeline, leveraging AWS EFS for scalable storage, enabling iterative model training and continuous improvement of machine learning models.',
          'Mentored and onboarded multiple interns and junior developers, enhancing their skills in standard engineering practices and ensuring they were well-equipped to contribute effectively to ongoing projects.',
          'Responsible for managing and overseeing IT assets for the research group, including asset procurement, audits, and overall asset lifecycle management.',
        ],
      },
      {
        designation: 'Research Intern - Full Stack',
        startMonth: 'Dec 2020',
        endMonth: 'Jun 2021',
        duration: '(6 months)',
        details: [
          'Developed a solution for digitalizing and analyzing industrial process plant workflows.',
          'Demonstrated proficiency in full-stack development by creating RESTful APIs with Python web frameworks on the backend and creating interactive frontends with the Angular Framework.',
          'Successfully contributed to projects involving Micro-Service Architecture, emphasizing scalability and modularity.',
          'Conducted comprehensive end-to-end user acceptance testing, ensuring the delivery of high-quality, user-centric solutions.',
          'Employed modern development practices, including Cookie-cutter templates, OpenAPI specifications, Pytest, and Docker, to optimize development workflows.',
          'Applied full-stack skills across multiple projects, showcasing adaptability and versatility in tackling diverse challenges.',
        ],
      },
    ],
  },
  {
    company: 'Veritas Technologies LLC',
    companyLogoUrl: 'assets/images/company-logo/veritas-logo.jpeg',
    companyWebsite: 'https://www.veritas.com/',
    location: 'Pune, India',
    roles: [
      {
        designation: 'Software Development Engineer - Intern',
        startMonth: 'Jan 2018',
        endMonth: 'Jun 2018',
        duration: '(6 months)',
        details: [
          'Developed a solution to identify missing inode flags and extended attributes during file backup and restoration across different file systems.',
          'Implemented a solution to safeguard inode flags and extended attributes during file backups, ensuring data integrity.',
          'Implemented a masking logic mechanism to enable secure and efficient cross-file system restores.',
          'Technologies used : C, C++ and Python',
        ],
      },
    ],
  },
];
