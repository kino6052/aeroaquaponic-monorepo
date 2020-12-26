// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { HeadingComponent } from 'src/app/components/heading/heading.component';
import { SectionComponent } from 'src/app/components/section/section.component';
import { SpacerComponent } from 'src/app/components/spacer/spacer.component';
import { TimelineComponent } from 'src/app/components/timeline/timeline.component';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import {
  data,
  ProjectsComponent,
} from 'src/app/composites/sections/projects/projects.component';

export default {
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [
        ProjectsComponent,
        TypographyComponent,
        SectionComponent,
        HeadingComponent,
        TimelineComponent,
        SpacerComponent,
      ],
    }),
  ],
  title: 'Aeroaquaponic/Composites/Section/Projects',
  component: ProjectsComponent,
} as Meta;

const Template: Story<ProjectsComponent> = (args: ProjectsComponent) => ({
  component: ProjectsComponent,
  props: args,
});

export const Projects = Template.bind({});
Projects.args = data;
