import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction-section',
  templateUrl: './introduction-section.component.html',
  styleUrls: ['./introduction-section.component.scss'],
})
export class IntroductionSectionComponent {
  linkButtons: {
    iconSrc: string;
    isImage: boolean;
    url: string;
    size?: string;
    margin?: string;
  }[] = [
    {
      iconSrc: 'bi-linkedin',
      isImage: false,
      url: '',
    },
    {
      iconSrc: 'bi-github',
      isImage: false,
      url: '',
    },
    {
      iconSrc: 'bi-envelope-fill',
      isImage: false,
      url: '',
    },
    {
      iconSrc: './assets/images/icons/leetcode-icon-gray.png',
      isImage: true,
      url: '',
      size: '1.3rem',
      margin: '-3px',
    },
    {
      iconSrc: './assets/images/icons/medium-icon-gray.png',
      isImage: true,
      url: '',
      size: '1.9rem',
      margin: '-6px',
    },
  ];
}
