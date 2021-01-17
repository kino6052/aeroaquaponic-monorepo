import { Component, Input, OnInit } from '@angular/core';

export interface ITimelineItem {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

@Component({
  selector: 'aeroaquaponic-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input()
  items: ITimelineItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
