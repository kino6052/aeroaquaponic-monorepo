// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { CardComponent } from 'src/app/components/card/card.component';
import {
  CardsContainerComponent,
  CardsContainerComponentData,
} from 'src/app/composites/cards-container/cards-container.component';

export default {
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [CardsContainerComponent, CardComponent, ButtonComponent],
    }),
  ],
  title: 'Aeroaquaponic/Composites/CardContainer',
  component: CardsContainerComponent,
} as Meta;

const Template: Story<CardsContainerComponent> = (
  args: CardsContainerComponent
) => ({
  component: CardsContainerComponent,
  props: args,
});

export const CardContainer = Template.bind({});
CardContainer.args = CardsContainerComponentData;
