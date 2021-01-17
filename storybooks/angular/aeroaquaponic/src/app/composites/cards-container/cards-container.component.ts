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
      image: 'https://aeroaquaponic.org/images/technology.png',
      title: 'Technology',
      text:
        'Aeroaquaponic systems are a soilless farming technology which combines aeroponics with cyclical aquaponics.',
      label: 'Learn More',
      link: 'https://aeroaquaponic.fandom.com/wiki/Self-sufficiency_Research',
    },
    {
      image: 'https://aeroaquaponic.org/images/unit-of-self-sufficiency.png',
      title: 'Unit of Self-Sufficiency',
      text:
        'Unit of self-sufficiency is a model of human existence in which the needs of its members are fulfilled with the minimal sufficient amount of sustainable resources owned by the unit.',
      label: 'Learn More',
      link: 'https://aeroaquaponic.fandom.com/wiki/Unit_of_Self-Sufficiency',
    },
    {
      image: 'https://aeroaquaponic.org/images/logo.png',
      title: 'Free Book',
      text:
        "Get our free eBook and learn about our ideas on how to solve some of the world's biggest problems.",
      label: 'Learn More',
      link: 'https://aeroaquaponic.fandom.com/wiki/Aeroaquaponic_Vision',
    },
  ],
};
