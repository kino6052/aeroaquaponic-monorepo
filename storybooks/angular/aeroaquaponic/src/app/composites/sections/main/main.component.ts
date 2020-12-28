import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aeroaquaponic-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input()
  title = data.title;

  @Input()
  subtitle = data.subtitle;

  constructor() {}

  ngOnInit(): void {}
}

export const data = {
  title: 'AEROAQUAPONIC',
  subtitle: 'Forming the Units of Self-sufficiency',
};
