import { Component } from '@angular/core';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss'],
})
export class EducationSectionComponent {
  qualifications: {
    title: string;
    subTitle: string;
    date: string;
    details?: string[];
  }[] = [
    {
      title: 'M.Tech in Computer Science and Engineering',
      subTitle:
        'International Institute of Information technology (IIIT), Bangalore',
      date: '2019 - 2021',
      details: [
        ' Served as a teaching assistant for the Software Production Engineering (DevOps) course, working under the guidance of Prof. B. Thangaraju.',
      ],
    },
    {
      title: 'GATE Computer Science Examination 2019',
      subTitle: 'All India Rank: 618',
      date: 'Feb 2019',
    },
    {
      title: 'B.Tech in Computer Science and Engineering',
      subTitle: 'Walchand College of Engineering, Sangli',
      date: '2014 - 2018',
      details: [
        'Smart India Hackathon 2017 - Finalist',
        'Techumen 2016 (Technical symposium organized by ACSES Club) - Best Volunteer',
      ],
    },
    {
      title: 'Higher Secondary Certification',
      subTitle: 'Chh. Shahu Vidyalaya Junior College, Kolhapur',
      date: '2012 - 2014',
      details: ['JEE Advance 2014 - AIR: 15,609 '],
    },
    {
      title: 'Secondary School Certification',
      subTitle: "St. Xavier's High School, Kolhapur",
      date: '2000 - 2012',
    },
  ];
}
