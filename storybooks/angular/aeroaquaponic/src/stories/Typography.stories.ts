// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import Button from '../app/components/button.component';

export default {
  title: 'Aeroaquaponic/Typography',
  component: TypographyComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TypographyComponent> = (args: TypographyComponent) => ({
  component: TypographyComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  content: `At Aeroaquaponic, we believe that the solution that will change the dead-end
  direction of modern society lies in sustainability. However, not the
  sustainability that comes from the industry, but the one that comes from the
  eco-communities. We believe that communities that are capable of producing
  most and, ideally, all of their food and being self-sufficient are the
  answer. It is a countermeasure to consumerism which is the driving force
  behind unsustainable resource utilization.`,
};
