import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aeroaquaponic-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  title: string = CardComponentData.title;

  @Input()
  text: string = CardComponentData.text;

  @Input()
  label: string = CardComponentData.label;

  @Input()
  onClickHandler: (e: Event) => void = (e) => {
    console.warn(e);
  };

  constructor() {}

  ngOnInit(): void {}
}

export interface ICard {
  title: string;
  text: string;
  label: string;
}

export const CardComponentData: ICard = {
  title: 'Technology',
  text:
    'We all want to be independent from the system. We all want to be independent from the system. We all want to be independent from the system.',
  label: 'Learn More',
};
