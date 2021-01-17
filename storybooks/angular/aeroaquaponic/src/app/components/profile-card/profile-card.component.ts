import { Component, Input, OnInit } from '@angular/core';

export interface IProfileCard {
  imageUrl: string;
  name: string;
  description: string;
  link: string;
}

@Component({
  selector: 'aeroaquaponic-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit, IProfileCard {
  @Input()
  onClickHandler(e: Event) {
    const a = document.createElement('a');
    a.setAttribute('target', '_blank');
    a.setAttribute('href', this.link);
    a.click();
  }

  @Input()
  link = '';

  @Input()
  imageUrl = '';

  @Input()
  name = 'name';

  @Input()
  description = 'description';

  constructor() {}

  ngOnInit(): void {}
}
