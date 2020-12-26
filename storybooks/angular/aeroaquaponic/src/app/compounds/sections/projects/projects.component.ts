import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aeroaquaponic-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  @Input()
  title = '';

  @Input()
  subtitle = '';

  @Input()
  text = '';

  ngOnInit(): void {}
}
