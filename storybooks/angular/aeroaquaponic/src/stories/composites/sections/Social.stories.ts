// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { SocialComponent } from 'src/app/composites/social/social.component';

export default {
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [SocialComponent],
    }),
  ],
  title: 'Aeroaquaponic/Composites/Sections/Social',
  component: SocialComponent,
} as Meta;

const Template: Story<SocialComponent> = (args: SocialComponent) => ({
  component: SocialComponent,
  props: args,
});

export const Social = Template.bind({});
Social.args = {};
