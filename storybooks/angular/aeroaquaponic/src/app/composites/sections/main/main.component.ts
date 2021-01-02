import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aeroaquaponic-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input()
  title = MainSectionData.title;

  @Input()
  subtitle = MainSectionData.subtitle;

  @Input()
  items = MainSectionData.items;

  constructor() {}

  ngOnInit(): void {}
}

export const MainSectionData = {
  title: 'AEROAQUAPONIC',
  subtitle: 'Forming the Units of Self-sufficiency',
  items: [
    {
      text: 'Get eBook',
      link: '#link',
    },
    {
      text: 'Projects',
      link: '#link',
    },
    {
      text: 'About Us',
      link: '#link',
    },
  ],
};
