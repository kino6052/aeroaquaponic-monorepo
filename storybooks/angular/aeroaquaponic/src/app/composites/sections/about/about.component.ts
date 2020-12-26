import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
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
      description: 'Medical Scientist',
      imageUrl: 'https://aeroaquaponic.org/images/cam.jpg',
    },
    {
      name: 'Kirill Novik',
      description: 'Senior Software Engineer',
      imageUrl: 'https://aeroaquaponic.org/images/kirill.jpg',
    },
    {
      name: 'Dmitry Dementyev',
      description: 'Senior Researcher in Aquaculture',
      imageUrl: 'https://aeroaquaponic.org/images/dima.png',
    },
    {
      name: 'Dmitry Dementyev',
      description: 'Senior Researcher in Aquaculture',
      imageUrl: 'https://aeroaquaponic.org/images/dima.png',
    },
    {
      name: 'Cam Schubert',
      description: 'Medical Scientist',
      imageUrl: 'https://aeroaquaponic.org/images/cam.jpg',
    },
    {
      name: 'Kirill Novik',
      description: 'Senior Software Engineer',
      imageUrl: 'https://aeroaquaponic.org/images/kirill.jpg',
    },
  ],
};
