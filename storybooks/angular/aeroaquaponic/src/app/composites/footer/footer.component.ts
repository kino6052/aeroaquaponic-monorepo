import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aeroaquaponic-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input()
  logo = FooterComponentData.logo;

  @Input()
  links = FooterComponentData.links;

  constructor() {}

  ngOnInit(): void {}
}

export const FooterComponentData = {
  logo: {
    link: 'https://aeroaquaponic.org/images/logo.png',
    description:
      "Get our free eBook and learn about our ideas on how to solve some of the world's biggest problems.",
  },
  links: [
    {
      link: 'https://www.youtube.com/channel/UCGes3ATrv3cOwRb39wo2iXQ',
      name: 'YouTube',
    },
    {
      link: 'https://www.instagram.com/aeroaquaponic/',
      name: 'Instagram',
    },
    {
      link: 'https://www.linkedin.com/company/aeroaquaponic',
      name: 'LinkedIn',
    },
    {
      link: 'https://twitter.com/AeroAquaponics',
      name: 'Twitter',
    },
    {
      link: 'https://medium.com/@aeroaquaponic',
      name: 'Medium',
    },
    {
      link: 'https://www.facebook.com/aeroaquaponic2020',
      name: 'Facebook',
    },
  ],
};
