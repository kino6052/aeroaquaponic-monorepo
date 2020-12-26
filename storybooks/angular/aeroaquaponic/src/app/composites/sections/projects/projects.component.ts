import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aeroaquaponic-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  @Input()
  title = data.title;

  @Input()
  subtitle = data.subtitle;

  @Input()
  text = data.text;

  ngOnInit(): void {}
}

export const data = {
  title: 'Projects',
  subtitle: "Let's make this happen!",
  text: `At Aeroaquaponic, we believe that the solution that will change the dead-end
  direction of modern society lies in sustainability. However, not the
  sustainability that comes from the industry, but the one that comes from the
  eco-communities. We believe that communities that are capable of producing
  most and, ideally, all of their food and being self-sufficient are the
  answer. It is a countermeasure to consumerism which is the driving force
  behind unsustainable resource utilization.`,
};
