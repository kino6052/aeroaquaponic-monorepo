import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aeroaquaponic-spacer',
  styleUrls: ['./spacer.component.scss'],
  template: `<div
    style="display: flex;
  width: 100%; height: {{ height }}vw;"
  ></div>`,
})
export class SpacerComponent implements OnInit {
  @Input()
  height = 1;

  constructor() {}

  ngOnInit(): void {}
}
