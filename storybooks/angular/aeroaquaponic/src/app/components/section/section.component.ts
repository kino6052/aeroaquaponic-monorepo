import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'aeroaquaponic-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
