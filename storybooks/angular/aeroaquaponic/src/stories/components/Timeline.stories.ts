// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { SpacerComponent } from 'src/app/components/spacer/spacer.component';
import { TimelineComponent } from 'src/app/components/timeline/timeline.component';

export default {
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [TimelineComponent, SpacerComponent],
      // imports: [AppModule],
    }),
  ],
  title: 'Aeroaquaponic/Components/Timeline',
  component: TimelineComponent,
} as Meta;

const Template: Story<TimelineComponent> = (args: TimelineComponent) => ({
  component: TimelineComponent,
  props: args,
});

export const Timeline = Template.bind({});
Timeline.args = {
  items: [
    { description: 'test', title: 'test' },
    { description: 'test', title: 'test' },
    { description: 'test', title: 'test' },
    { description: 'test', title: 'test' },
    { description: 'test', title: 'test' },
    { description: 'test', title: 'test' },
  ],
};
