// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ProfileCardComponent } from 'src/app/components/profile-card/profile-card.component';

export default {
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [ProfileCardComponent],
      // imports: [AppModule],
    }),
  ],
  title: 'Aeroaquaponic/Components/ProfileCard',
  component: ProfileCardComponent,
} as Meta;

const Template: Story<ProfileCardComponent> = (args: ProfileCardComponent) => ({
  component: ProfileCardComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  name: 'Mr. Twister',
  description: 'Leitminister',
  imageUrl: 'https://aeroaquaponic.org/images/dima.png',
};
