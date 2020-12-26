import { Component, Input, OnInit } from '@angular/core';

export interface IProfileCard {
  imageUrl: string;
  name: string;
  description: string;
}

@Component({
  selector: 'aeroaquaponic-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit, IProfileCard {
  @Input()
  imageUrl = '';

  @Input()
  name = 'name';

  @Input()
  description = 'description';

  constructor() {}

  ngOnInit(): void {}
}
