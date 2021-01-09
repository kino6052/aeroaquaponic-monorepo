import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/components/card/card.component';

@Component({
  selector: 'aeroaquaponic-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss'],
})
export class CardsContainerComponent implements OnInit {
  @Input()
  cards: ICard[] = CardsContainerComponentData.cards;

  constructor() {}

  ngOnInit(): void {}
}

export const CardsContainerComponentData = {
  cards: [
    {
      title: 'Technology',
      text:
        'It is always great when the latest technology are always by your side. It is important to pay attention to the latest trends. Making selfies with you phone is such a waste of your time.',
      label: 'Learn More',
    },
    {
      title: 'Technology',
      text:
        'It is always great when the latest technology are always by your side. It is important to pay attention to the latest trends. Making selfies with you phone is such a waste of your time.',
      label: 'Learn More',
    },
    {
      title: 'Technology',
      text:
        'It is always great when the latest technology are always by your side. It is important to pay attention to the latest trends. Making selfies with you phone is such a waste of your time.',
      label: 'Learn More',
    },
  ],
};
