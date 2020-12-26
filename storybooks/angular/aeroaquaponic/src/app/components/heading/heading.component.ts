import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aeroaquaponic-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent implements OnInit {
  @Input()
  title = '';

  @Input()
  subtitle = '';

  constructor() {}

  ngOnInit(): void {}
}
