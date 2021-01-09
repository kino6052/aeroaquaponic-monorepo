// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { HeadingComponent } from 'src/app/components/heading/heading.component';
import { SectionComponent } from 'src/app/components/section/section.component';
import { SpacerComponent } from 'src/app/components/spacer/spacer.component';
import { DonateComponent } from 'src/app/composites/sections/donate/donate.component';
import { data } from 'src/app/composites/sections/projects/projects.component';

export default {
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [
        DonateComponent,
        HeadingComponent,
        SpacerComponent,
        ButtonComponent,
        SectionComponent,
      ],
    }),
  ],
  title: 'Aeroaquaponic/Composites/Sections/Donate',
  component: DonateComponent,
} as Meta;

const Template: Story<DonateComponent> = (args: DonateComponent) => ({
  component: DonateComponent,
  props: args,
});

export const Donate = Template.bind({});
Donate.args = {};
