import { Component, Input, OnInit } from '@angular/core';
import { ITimelineItem } from 'src/app/components/timeline/timeline.component';

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

  @Input()
  items: ITimelineItem[] = data.items;

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
  items: [
    {
      title: 'Groundwork',
      description:
        'We will need to gather information about what is out there already in order to find best candidates for collaboration.',
    },
    {
      title: 'Unit of Self-Sufficiency',
      description:
        'We will work together on the proof-of-concept of Unit of Self-Sufficiency.',
    },
    {
      title: 'Self-sufficiency Guide',
      description:
        'Once the other two objectives are complete we would like to let the world know how to achieve this goal.',
    },
  ],
};
