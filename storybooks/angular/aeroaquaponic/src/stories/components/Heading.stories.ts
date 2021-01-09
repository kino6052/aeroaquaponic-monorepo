// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { HeadingComponent } from 'src/app/components/heading/heading.component';

export default {
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [HeadingComponent],
      // imports: [AppModule],
    }),
  ],
  title: 'Aeroaquaponic/Components/Heading',
  component: HeadingComponent,
} as Meta;

const Template: Story<HeadingComponent> = (args: HeadingComponent) => ({
  component: HeadingComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  version: 'black',
};
