import { Component, Input, OnInit } from '@angular/core';
import { IProfileCard } from 'src/app/components/profile-card/profile-card.component';

@Component({
  selector: 'aeroaquaponic-profile-card-container',
  templateUrl: './profile-card-container.component.html',
  styleUrls: ['./profile-card-container.component.scss'],
})
export class ProfileCardContainerComponent implements OnInit {
  @Input()
  profiles: IProfileCard[] = [];

  constructor() {}

  ngOnInit(): void {}
}
