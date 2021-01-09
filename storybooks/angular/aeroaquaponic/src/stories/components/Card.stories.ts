// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonComponent } from 'src/app/components/button/button.component';
import {
  CardComponent,
  CardComponentData,
} from 'src/app/components/card/card.component';

export default {
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [CardComponent, ButtonComponent],
      // imports: [AppModule],
    }),
  ],
  title: 'Aeroaquaponic/Components/Card',
  component: CardComponent,
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  component: CardComponent,
  props: args,
});

export const Card = Template.bind({});
Card.args = CardComponentData;
