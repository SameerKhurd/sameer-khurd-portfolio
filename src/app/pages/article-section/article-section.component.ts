import { Component } from '@angular/core';

@Component({
  selector: 'app-article-section',
  templateUrl: './article-section.component.html',
  styleUrls: ['./article-section.component.scss'],
})
export class ArticleSectionComponent {
  articles: { imgSrcUrl: string; title: string; desc: string; url: string }[] =
    [
      {
        imgSrcUrl: 'assets/images/articles/zenmeet-article-cover.png',
        title:
          'From Design to Demo: Building a Full-Stack Video Conferencing Platform like Zoom, Microsoft Teams, and Google Meet',
        desc: 'In this blog, I have deep-dived into the entire process of designing and developing a video conferencing platform like Microsoft Teams, Zoom and Google Meet.',
        url: 'https://medium.com/@sameerkhurd/from-design-to-demo-building-a-full-stack-video-conferencing-platform-like-zoom-microsoft-teams-761ec676d237',
      },
      {
        imgSrcUrl: 'assets/images/articles/algobytes-article-cover.png',
        title:
          'From Design to Demo: Building a Full Stack LeetCode-like Platform with System Design',
        desc: 'Explore the end-to-end process of designing, building, and deploying a LeetCode-like platform, step by step. ',
        url: 'https://medium.com/@sameerkhurd/from-design-to-demo-building-a-full-stack-leetcode-like-platform-with-system-design-4c86d61f398a',
      },
    ];
}
