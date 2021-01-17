import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/general.service';

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

  @Input()
  onClickHandler = (id: string) => {
    this.generalService.scrollToId(id);
  };

  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {}
}

export const MainSectionData = {
  title: 'AEROAQUAPONIC',
  subtitle: 'Forming the Units of Self-sufficiency',
  items: [
    {
      text: 'Overview',
      link: '#overview',
    },
    {
      text: 'Projects',
      link: '#projects',
    },
    {
      text: 'Donate',
      link: '#support',
    },
    {
      text: 'About',
      link: '#about',
    },
  ],
};
