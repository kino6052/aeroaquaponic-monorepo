import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aeroaquaponic-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  image: string = CardComponentData.image;

  @Input()
  title: string = CardComponentData.title;

  @Input()
  text: string = CardComponentData.text;

  @Input()
  label: string = CardComponentData.label;

  @Input()
  link: string = CardComponentData.link;

  @Input()
  onClickHandler: (e: Event) => void = (e) => {
    const a = document.createElement('a');
    a.setAttribute('target', '_blank');
    a.setAttribute('href', this.link);
    a.click();
  };

  constructor() {}

  ngOnInit(): void {}
}

export interface ICard {
  image: string;
  title: string;
  text: string;
  label: string;
  link: string;
}

export const CardComponentData: ICard = {
  title: 'Technology',
  text:
    'We all want to be independent from the system. We all want to be independent from the system. We all want to be independent from the system.',
  label: 'Learn More',
  image: 'https://aeroaquaponic.org/images/logo.png',
  link: 'https://aeroaquaponic.org',
};
