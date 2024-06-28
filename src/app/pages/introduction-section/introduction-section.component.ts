import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction-section',
  templateUrl: './introduction-section.component.html',
  styleUrls: ['./introduction-section.component.scss'],
})
export class IntroductionSectionComponent {
  linkButtons: {
    title: string;
    iconSrc: string;
    isImage: boolean;
    url: string;
    size?: string;
    margin?: string;
  }[] = [
    {
      iconSrc: 'bi-linkedin',
      isImage: false,
      url: 'https://www.linkedin.com/in/sameer-khurd',
      title: 'Open Linkedin profile'
    },
    {
      iconSrc: 'bi-github',
      isImage: false,
      url: 'https://github.com/SameerKhurd',
      title: 'Open Github profile'
    },
    {
      iconSrc: 'bi-envelope-fill',
      isImage: false,
      url: 'mailto:sameerkhurd@gmail.com',
      title: 'Email to Sameer Khurd'
    },
    {
      iconSrc: './assets/images/icons/leetcode-icon-gray.png',
      isImage: true,
      url: 'https://leetcode.com/sameerkhurd/',
      size: '1.3rem',
      margin: '-3px',
      title: 'Open Leetcode profile'
    },
    {
      iconSrc: './assets/images/icons/medium-icon-gray.png',
      isImage: true,
      url: 'https://medium.com/@sameerkhurd',
      size: '1.9rem',
      margin: '-6px',
      title: 'Open Medium profile'
    },
  ];
}
