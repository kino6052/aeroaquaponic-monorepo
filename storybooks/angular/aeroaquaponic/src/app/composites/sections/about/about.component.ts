import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aeroaquaponic-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  @Input()
  title = data.title;

  @Input()
  subtitle = data.subtitle;

  @Input()
  text = data.text;

  @Input()
  profiles = data.profiles;

  constructor() {}

  ngOnInit(): void {}
}

export const data = {
  title: 'About Us',
  subtitle: 'Our Team',
  text: `We are a non-profit organization of scientists and engineers who want to bring a change to the world. Our goal is to provide tools to achieve the goal of self-sufficiency. This great feat will not be possible without you. Only together can we achieve this.`,
  profiles: [
    {
      name: 'Cam Schubert',
      description: 'Director of Community Development',
      imageUrl: 'https://aeroaquaponic.org/images/cam.jpg',
      link:
        'https://aeroaquaponic.fandom.com/wiki/Cam_Schubert_-_Director_of_Community_Development',
    },
    {
      name: 'Kirill Novik',
      description: 'Director of Research and Development',
      imageUrl: 'https://aeroaquaponic.org/images/kirill.jpg',
      link:
        'https://aeroaquaponic.fandom.com/wiki/Kirill_Novik_-_Research_and_Development_Director',
    },
    {
      name: 'Dmitry Dementyev',
      description: 'Senior Researcher in Aquaculture',
      imageUrl: 'https://aeroaquaponic.org/images/dima.png',
      link:
        'https://aeroaquaponic.fandom.com/wiki/Dmitry_Dementyev_-_Director_of_Research',
    },
    {
      name: 'Darrah Herman',
      description: 'Director of Ecosystem Balance',
      imageUrl: 'https://aeroaquaponic.org/images/darrah.jpeg',
      link:
        'https://aeroaquaponic.fandom.com/wiki/Darrah_Herman_-_Director_of_Ecosystem_Balance',
    },
    {
      name: 'Jameson Owens',
      description: 'Director of Community Outreach',
      imageUrl: 'https://aeroaquaponic.org/images/jameson.jpeg',
      link:
        'https://aeroaquaponic.fandom.com/wiki/Jameson_Owens_-_Director_of_Community_Outreach',
    },
    {
      name: 'Nikita Novik',
      description: 'Creative Director',
      imageUrl: 'https://aeroaquaponic.org/images/nikita.jpeg',
      link:
        'https://aeroaquaponic.fandom.com/wiki/Nikita_Novik_-_Creative_Director',
    },
  ],
};
