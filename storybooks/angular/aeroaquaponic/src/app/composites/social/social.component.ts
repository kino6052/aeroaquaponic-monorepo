import { Component, Input, OnInit } from '@angular/core';

export interface IIcon {
  link: string;
  image: string;
}

@Component({
  selector: 'aeroaquaponic-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent implements OnInit {
  @Input()
  icons: IIcon[] = SocialComponentData;

  constructor() {}

  ngOnInit(): void {}
}

export const SocialComponentData: IIcon[] = [
  {
    link: 'https://www.youtube.com/channel/UCGes3ATrv3cOwRb39wo2iXQ',
    image: 'https://aeroaquaponic.org/images/youtube.png',
  },
  {
    link: 'https://www.facebook.com/aeroaquaponic2020',
    image: 'https://aeroaquaponic.org/images/facebook.png',
  },
  {
    link: 'https://twitter.com/aeroaquaponic',
    image: 'https://aeroaquaponic.org/images/twitter.png',
  },
  {
    link: 'https://www.instagram.com/aeroaquaponic/',
    image: 'https://aeroaquaponic.org/images/kickstarter.png',
  },
  {
    link: 'https://www.linkedin.com/company/aeroaquaponic',
    image: 'https://aeroaquaponic.org/images/linkedin.png',
  },
];
